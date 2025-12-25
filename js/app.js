/* =================================================================
   MAIN APPLICATION LOGIC - Core Functionality
   ================================================================= */

let currentWeek = 1;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    selectWeek(1);
    updateProgress();
    applyTheme();
    setupEventListeners();
});

// =================================================================
// SIDEBAR MANAGEMENT
// =================================================================

function renderSidebar() {
    const sidebar = document.getElementById('sidebarNav');
    let html = '';

    const phases = [
        { id: 'phase1', title: 'Phase 1: Foundations', weeks: [1, 2, 3] },
        { id: 'phase2', title: 'Phase 2: Genomics Core', weeks: [4, 6, 8, 9] },
        { id: 'phase3', title: 'Phase 3: Machine Learning', weeks: [10, 12, 14] },
        { id: 'phase4', title: 'Phase 4: Cloud & DevOps', weeks: [15, 16, 17, 18] },
        { id: 'phase5', title: 'Phase 5: Advanced', weeks: [19, 20, 21, 22] },
        { id: 'capstone', title: 'Capstone', weeks: [23, 24] }
    ];

    phases.forEach(phase => {
        html += `<div class="sidebar-phase" data-phase="${phase.id}">
            <div class="sidebar-phase-title">${phase.title}</div>`;

        phase.weeks.forEach(week => {
            const data = weeks[week];
            const isCompleted = isWeekCompleted(week);
            html += `<div class="sidebar-week ${isCompleted ? 'completed' : ''}" 
                        data-week="${week}" 
                        onclick="selectWeek(${week})"
                        role="button"
                        tabindex="0"
                        aria-label="Week ${week}: ${data.title}">
                <span>${data.title}</span>
                <div class="week-badge">${week > 22 ? 'C' + (week - 22) : week}</div>
            </div>`;
        });

        html += '</div>';
    });

    sidebar.innerHTML = html;
}

function selectWeek(week) {
    currentWeek = week;
    
    // Update active state
    document.querySelectorAll('.sidebar-week').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector(`[data-week="${week}"]`).classList.add('active');
    
    // Render content
    renderWeekContent(week);
    updateProgress();
    
    // Scroll to top
    document.querySelector('.content').scrollTop = 0;
    
    // Close sidebar on mobile
    closeSidebar();
}

function renderWeekContent(week) {
    const data = weeks[week];
    const isCompleted = isWeekCompleted(week);
    const content = document.getElementById('weekContent');
    
    let tasksHTML = data.tasks.map((task, idx) => `
        <li class="checklist-item ${isTaskCompleted(week, idx) ? 'completed' : ''}" id="task${week}-${idx}">
            <input type="checkbox" id="cb${week}-${idx}" 
                   ${isTaskCompleted(week, idx) ? 'checked' : ''}
                   onchange="toggleTask(${week}, ${idx})"
                   aria-label="Task: ${task}">
            <label for="cb${week}-${idx}" class="checklist-label">${task}</label>
        </li>
    `).join('');

    let resourcesHTML = data.resources.map(r => `
        <div class="resource-item">
            <a href="${r.link}" target="_blank" rel="noopener noreferrer" class="resource-link">
                ${r.name}
            </a>
            <p class="resource-desc">${r.desc || 'Free learning resource'}</p>
        </div>
    `).join('');

    const weekNumber = week > 22 ? `Capstone ${week - 22}` : `Week ${week}`;

    const html = `
        <div class="week-card">
            <div class="week-header">
                <div class="week-info">
                    <h1 class="week-title">${data.title}</h1>
                    <p class="week-subtitle">${data.description}</p>
                    <div class="week-meta">
                        <span class="tag success">⏱️ ${data.duration}</span>
                        <span class="tag info">📂 Phase ${data.phase}</span>
                    </div>
                </div>
                <button class="week-toggle ${isCompleted ? 'completed' : ''}" 
                        onclick="toggleWeekCompletion(${week})"
                        id="toggleBtn${week}">
                    ${isCompleted ? '✓ Completed' : 'Mark Complete'}
                </button>
            </div>

            <!-- TABS -->
            <div class="tabs">
                <button class="tab active" onclick="switchTab(event, 'overview', ${week})">Overview</button>
                <button class="tab" onclick="switchTab(event, 'checklist', ${week})">Checklist</button>
                <button class="tab" onclick="switchTab(event, 'resources', ${week})">Resources</button>
            </div>

            <!-- OVERVIEW TAB -->
            <div id="overview-${week}" class="tab-content active">
                <div class="section">
                    <div class="section-title">
                        <span class="section-icon">🎯</span>
                        Project Specification
                    </div>
                    <div class="project-card">
                        <div class="project-title">${data.project}</div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">
                        <span class="section-icon">📚</span>
                        Topics Covered
                    </div>
                    <div class="tags">
                        ${data.topics.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">
                        <span class="section-icon">📊</span>
                        Dataset
                    </div>
                    <div class="project-card">
                        <div class="project-desc">${data.dataset}</div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">
                        <span class="section-icon">💡</span>
                        Learning Outcomes
                    </div>
                    <div class="project-card">
                        <div class="project-desc">${data.outcome}</div>
                    </div>
                </div>
            </div>

            <!-- CHECKLIST TAB -->
            <div id="checklist-${week}" class="tab-content">
                <div class="section">
                    <div class="section-title">
                        <span class="section-icon">✓</span>
                        Tasks to Complete
                    </div>
                    <ul class="checklist">
                        ${tasksHTML}
                    </ul>
                </div>
            </div>

            <!-- RESOURCES TAB -->
            <div id="resources-${week}" class="tab-content">
                <div class="section">
                    <div class="section-title">
                        <span class="section-icon">🔗</span>
                        Free Learning Resources
                    </div>
                    <div class="resources">
                        ${resourcesHTML}
                    </div>
                </div>
            </div>
        </div>
    `;

    content.innerHTML = html;
    document.getElementById('pageTitle').textContent = data.title;
    document.getElementById('pageSubtitle').textContent = data.description;
}

function switchTab(event, tabName, week) {
    event.preventDefault();
    
    // Hide all tabs for this week
    document.querySelectorAll(`#overview-${week}, #checklist-${week}, #resources-${week}`).forEach(el => {
        el.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(el => {
        el.classList.remove('active');
    });
    
    // Show selected tab
    const tabId = `${tabName}-${week}`;
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
        tabElement.classList.add('active');
    }
    
    // Mark button as active
    event.target.classList.add('active');
}

// =================================================================
// TASK & WEEK COMPLETION
// =================================================================

function toggleTask(week, taskIdx) {
    const checkbox = document.getElementById(`cb${week}-${taskIdx}`);
    const item = document.getElementById(`task${week}-${taskIdx}`);
    
    if (checkbox.checked) {
        item.classList.add('completed');
    } else {
        item.classList.remove('completed');
    }
    
    saveWeekState(week);
    updateProgress();
}

function toggleWeekCompletion(week) {
    const btn = document.getElementById(`toggleBtn${week}`);
    const weekEl = document.querySelector(`[data-week="${week}"]`);
    
    if (btn.classList.contains('completed')) {
        btn.classList.remove('completed');
        btn.textContent = 'Mark Complete';
        weekEl.classList.remove('completed');
    } else {
        btn.classList.add('completed');
        btn.textContent = '✓ Completed';
        weekEl.classList.add('completed');
    }
    
    saveWeekState(week);
    updateProgress();
}

// =================================================================
// PROGRESS TRACKING
// =================================================================

function updateProgress() {
    let completed = 0;
    let totalTasks = 0;
    
    Object.keys(weeks).forEach(week => {
        if (isWeekCompleted(parseInt(week))) {
            completed++;
        }
    });
    
    const percentage = (completed / Object.keys(weeks).length) * 100;
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('totalCount').textContent = Object.keys(weeks).length;
    document.getElementById('weeksComplete').textContent = completed;
    
    // Calculate tasks completed
    let tasksCompleted = 0;
    Object.keys(weeks).forEach(week => {
        for (let i = 0; i < weeks[week].tasks.length; i++) {
            if (isTaskCompleted(parseInt(week), i)) {
                tasksCompleted++;
            }
        }
    });
    
    let totalTasks_ = 0;
    Object.keys(weeks).forEach(week => {
        totalTasks_ += weeks[week].tasks.length;
    });
    
    document.getElementById('tasksComplete').textContent = tasksCompleted;
}

function isWeekCompleted(week) {
    const state = JSON.parse(localStorage.getItem(`week${week}`) || '{}');
    return state.completed || false;
}

function isTaskCompleted(week, taskIdx) {
    const state = JSON.parse(localStorage.getItem(`week${week}`) || '{}');
    if (state.tasks && state.tasks[taskIdx] !== undefined) {
        return state.tasks[taskIdx];
    }
    return false;
}

function saveWeekState(week) {
    const tasks = [];
    for (let i = 0; i < weeks[week].tasks.length; i++) {
        const cb = document.getElementById(`cb${week}-${i}`);
        if (cb) tasks.push(cb.checked);
    }
    const btn = document.getElementById(`toggleBtn${week}`);
    const completed = btn ? btn.classList.contains('completed') : false;
    localStorage.setItem(`week${week}`, JSON.stringify({ tasks, completed }));
}

// =================================================================
// THEME TOGGLE
// =================================================================

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeButton();
}

function applyTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeButton();
}

function updateThemeButton() {
    const btn = document.querySelector('.theme-toggle');
    const isDark = document.body.classList.contains('dark-mode');
    btn.textContent = isDark ? '☀️' : '🌙';
}

// =================================================================
// SIDEBAR MOBILE TOGGLE
// =================================================================

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function closeSidebar() {
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
}

// =================================================================
// FILTERING & SEARCH
// =================================================================

function filterWeeks(searchTerm) {
    const weeks_ = document.querySelectorAll('.sidebar-week');
    weeks_.forEach(week => {
        const text = week.textContent.toLowerCase();
        if (text.includes(searchTerm.toLowerCase())) {
            week.style.display = '';
        } else {
            week.style.display = 'none';
        }
    });
}

function filterByPhase(phaseId) {
    const phases = document.querySelectorAll('.sidebar-phase');
    phases.forEach(phase => {
        if (phaseId === '' || phase.dataset.phase === phaseId) {
            phase.style.display = '';
        } else {
            phase.style.display = 'none';
        }
    });
}

// =================================================================
// EVENT LISTENERS
// =================================================================

function setupEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });

    // Close sidebar on outside click
    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.querySelector('.menu-toggle');
        if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
            closeSidebar();
        }
    });

    // Mobile menu toggle
    if (window.innerWidth <= 768) {
        document.querySelector('.menu-toggle').addEventListener('click', toggleSidebar);
    }

    // Window resize handler
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            document.getElementById('sidebar').classList.remove('open');
        }
    });
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

function exportProgress() {
    const progressData = {};
    Object.keys(weeks).forEach(week => {
        progressData[week] = JSON.parse(localStorage.getItem(`week${week}`) || '{}');
    });
    
    const dataStr = JSON.stringify(progressData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bioinformatics-progress.json';
    link.click();
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        Object.keys(weeks).forEach(week => {
            localStorage.removeItem(`week${week}`);
        });
        location.reload();
    }
}

console.log('✅ Clinical Bioinformatics Roadmap Loaded');
