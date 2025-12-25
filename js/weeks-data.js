/* =================================================================
   WEEKS DATA - Complete 26-Week Curriculum
   ================================================================= */

const weeks = {
    1: {
        title: "Week 1: Python Fundamentals for Bioinformatics",
        description: "Variables, data structures, control flow, OOP, NumPy arrays",
        phase: 1,
        duration: "7 days",
        project: "Build a DNA codon table calculator using NumPy",
        outcome: "Process genomic sequences programmatically with vectorized operations",
        topics: ["Variables & Types", "Data Structures", "Control Flow", "Functions", "OOP", "NumPy Arrays"],
        tasks: [
            "Parse FASTA files containing 1000+ DNA sequences",
            "Calculate GC content for each sequence using NumPy",
            "Implement codon translation (DNA → Protein)",
            "Create performance comparison: loop vs NumPy vectorization",
            "Create visualization: GC content distribution across sequences",
            "Deliverable: Jupyter notebook with results and visualizations"
        ],
        dataset: "1000 DNA sequences in FASTA format (50-500bp each)",
        resources: [
            { name: "Real Python: NumPy Tutorial", link: "https://realpython.com/numpy-tutorial/", desc: "Comprehensive NumPy guide" },
            { name: "BioPython Documentation", link: "http://biopython.org/", desc: "Official BioPython resources" },
            { name: "Data Carpentry: Python", link: "https://datacarpentry.org/python-ecology/", desc: "Data analysis with Python" }
        ]
    },
    2: {
        title: "Week 2: R and Tidyverse for Genomic Data",
        description: "R basics, dplyr, ggplot2, data manipulation",
        phase: 1,
        duration: "7 days",
        project: "Analyze gene expression data using tidyverse",
        outcome: "Tidy workflow for genomic data analysis with publication-quality visualizations",
        topics: ["R Basics", "dplyr", "ggplot2", "Data Tidying", "Statistical Summaries"],
        tasks: [
            "Load RNA-seq count matrix (CSV: 10k genes × 50 samples)",
            "Normalize counts using log2(counts + 1) transformation",
            "Filter low-expression genes (keep genes with mean > 5 counts)",
            "Group samples by condition and calculate summary statistics",
            "Create publication-quality visualizations with ggplot2",
            "Deliverable: R Markdown report with tables and figures"
        ],
        dataset: "RNA-seq count matrix (10,000 genes × 50 samples)",
        resources: [
            { name: "R for Data Science", link: "https://r4ds.had.co.nz/", desc: "R programming guide" },
            { name: "Posit Cloud IDE", link: "https://posit.co/", desc: "Free RStudio cloud" },
            { name: "ggplot2 Cookbook", link: "http://www.cookbook-r.com/Graphs/", desc: "Visualization recipes" }
        ]
    },
    3: {
        title: "Week 3: Biological File Formats & BioPython",
        description: "FASTQ, SAM/BAM, VCF, GFF parsing with BioPython",
        phase: 1,
        duration: "7 days",
        project: "Build a NGS quality control pipeline",
        outcome: "Parse and analyze next-gen sequencing files programmatically",
        topics: ["FASTQ Format", "SAM/BAM", "VCF", "GFF", "BioPython I/O", "QC Metrics"],
        tasks: [
            "Parse FASTQ file and calculate per-position quality statistics",
            "Identify low-quality reads (Phred < 30) and filter",
            "Parse BAM file and extract mapping statistics (coverage, insert size)",
            "Load VCF file and categorize variants (SNP/INDEL/SV)",
            "Create interactive quality report (HTML with Plotly)",
            "Deliverable: Python script + quality report HTML file"
        ],
        dataset: "100k reads FASTQ, aligned BAM, variant VCF file",
        resources: [
            { name: "BioPython Tutorial", link: "http://biopython.org/DIST/docs/tutorial/", desc: "Complete BioPython guide" },
            { name: "SAM Format Spec", link: "http://samtools.github.io/hts-specs/", desc: "Technical specifications" },
            { name: "Data Carpentry Genomics", link: "https://datacarpentry.org/genomics-workshop/", desc: "Hands-on genomics" }
        ]
    },
    4: {
        title: "Week 4-5: NGS Data Handling & Quality Control",
        description: "FastQC, Trimmomatic, alignment algorithms, SAM/BAM manipulation",
        phase: 2,
        duration: "14 days",
        project: "End-to-end NGS preprocessing pipeline",
        outcome: "Production-quality read processing with QC reports",
        topics: ["FastQC", "Adapter Trimming", "Alignment", "BAM Processing", "QC Metrics"],
        tasks: [
            "Run FastQC on raw FASTQ files (generate HTML reports)",
            "Trim adapters and low-quality bases (Q<30) using Trimmomatic",
            "Align reads to reference genome with BWA or Bowtie2",
            "Mark duplicates with Picard tools",
            "Generate BAM statistics (coverage, depth, insert size)",
            "Create comprehensive preprocessing report",
            "Deliverable: BAM files + preprocessing script + metrics"
        ],
        dataset: "3 paired-end FASTQ samples from NCBI SRA (30M reads each)",
        resources: [
            { name: "FastQC Docs", link: "https://www.bioinformatics.babraham.ac.uk/projects/fastqc/", desc: "Quality assessment tool" },
            { name: "BWA Aligner", link: "http://bio-bwa.sourceforge.net/", desc: "Read mapping tool" },
            { name: "SAMtools Docs", link: "http://samtools.sourceforge.net/", desc: "BAM file utilities" }
        ]
    },
    6: {
        title: "Week 6-7: Variant Calling & Annotation",
        description: "SNP/INDEL calling, variant annotation, VEP, SnpEff",
        phase: 2,
        duration: "14 days",
        project: "Build a variant interpretation pipeline",
        outcome: "Annotated VCF with clinical pathogenicity predictions",
        topics: ["Variant Calling", "VCF Format", "Annotation", "VEP", "SnpEff", "Pathogenicity"],
        tasks: [
            "Call variants using GATK or Samtools (SNPs and INDELs)",
            "Annotate with VEP/SnpEff (functional impact prediction)",
            "Filter variants (PASS quality, allele frequency < 1%)",
            "Classify pathogenicity (benign/VUS/pathogenic)",
            "Generate annotated VCF with clinical fields",
            "Create interactive HTML variant report",
            "Deliverable: VCF file + variant classification report"
        ],
        dataset: "Exome-seq BAM files from 10 samples",
        resources: [
            { name: "GATK Best Practices", link: "https://gatk.broadinstitute.org/", desc: "Official GATK guide" },
            { name: "VEP Annotation", link: "http://www.ensembl.org/vep/", desc: "Variant effect prediction" },
            { name: "SnpEff", link: "http://snpeff.sourceforge.net/", desc: "Genetic variant annotation" }
        ]
    },
    8: {
        title: "Week 8: RNA-seq & Differential Expression",
        description: "Quantification (salmon, kallisto), DESeq2, edgeR",
        phase: 2,
        duration: "7 days",
        project: "Full RNA-seq workflow (raw reads → volcano plot)",
        outcome: "Differentially expressed genes with adjusted p-values",
        topics: ["Quantification", "DESeq2", "edgeR", "Normalization", "Statistical Testing"],
        tasks: [
            "Quantify transcripts with Salmon/Kallisto (pseudo-alignment)",
            "Import counts into R and create expression matrix",
            "Apply normalization (TMM or median-of-ratios)",
            "Run differential expression analysis (DESeq2/edgeR)",
            "Filter significant genes: log2FC > 1, adj.p < 0.05",
            "Create MA plot, volcano plot, heatmap",
            "Deliverable: DEG list (CSV) + analysis report"
        ],
        dataset: "12 FASTQ files (6 control, 6 treatment) from GEO",
        resources: [
            { name: "DESeq2 Vignette", link: "https://bioconductor.org/packages/release/bioc/vignettes/DESeq2/", desc: "DESeq2 manual" },
            { name: "Salmon Docs", link: "https://salmon.readthedocs.io/", desc: "Salmon aligner" },
            { name: "edgeR Guide", link: "https://bioconductor.org/packages/release/bioc/vignettes/edgeR/", desc: "edgeR manual" }
        ]
    },
    9: {
        title: "Week 9: Statistical Modeling & Hypothesis Testing",
        description: "t-tests, ANOVA, linear models, multiple testing correction",
        phase: 2,
        duration: "7 days",
        project: "Advanced statistical analysis on omics data",
        outcome: "Rigorous statistical insights with proper corrections",
        topics: ["Parametric Tests", "Non-parametric Tests", "ANOVA", "Regression", "Multiple Testing"],
        tasks: [
            "Conduct t-tests and ANOVA for group comparisons",
            "Apply non-parametric alternatives (Kruskal-Wallis)",
            "Implement FDR/Bonferroni correction for multiple tests",
            "Perform linear regression with covariates",
            "Calculate effect sizes (Cohen's d, eta-squared)",
            "Create summary statistics table",
            "Deliverable: Statistical analysis report with p-values"
        ],
        dataset: "Multi-condition gene expression matrix",
        resources: [
            { name: "Statistical Testing", link: "https://www.statmethods.net/", desc: "R statistics" },
            { name: "Biostat Handbook", link: "http://www.biostathandbook.com/", desc: "Biological statistics" },
            { name: "Multiple Testing", link: "https://en.wikipedia.org/wiki/Multiple_comparisons_problem", desc: "Correction methods" }
        ]
    },
    10: {
        title: "Week 10-11: Classical Machine Learning in Genomics",
        description: "Classification, clustering, feature selection, cross-validation",
        phase: 3,
        duration: "14 days",
        project: "Disease prediction model from gene expression",
        outcome: "Trained classifier with 85%+ accuracy and cross-validation",
        topics: ["Feature Selection", "Classification", "Clustering", "Cross-validation", "ROC Analysis"],
        tasks: [
            "Load expression matrix (500 samples × 5000 genes)",
            "Split: 80% train, 20% test stratified by class",
            "Feature selection: top 100 genes by variance",
            "Train 3 models: Logistic Regression, Random Forest, SVM",
            "Evaluate: accuracy, precision, recall, AUC-ROC, F1-score",
            "Implement 5-fold cross-validation",
            "Create ROC curves and confusion matrices",
            "Deliverable: Trained model + performance comparison"
        ],
        dataset: "500 samples × 5000 genes, 2 disease classes",
        resources: [
            { name: "scikit-learn Docs", link: "https://scikit-learn.org/", desc: "ML library" },
            { name: "ML for Genomics", link: "https://github.com/topics/machine-learning-genomics", desc: "ML resources" },
            { name: "Applied ML", link: "https://towardsdatascience.com/", desc: "ML tutorials" }
        ]
    },
    12: {
        title: "Week 12-13: Deep Learning for Genomic Sequences",
        description: "CNNs, RNNs, sequence embeddings, transfer learning",
        phase: 3,
        duration: "14 days",
        project: "Predict gene expression from DNA sequence",
        outcome: "DL model achieving >0.7 correlation on test set",
        topics: ["CNNs", "RNNs", "Sequence Modeling", "Transfer Learning", "Embeddings"],
        tasks: [
            "Encode DNA sequences (one-hot: ATGC → binary)",
            "Build CNN: 2 conv layers, max pooling, dense layers",
            "Train on 80% data, validate on 20%",
            "Achieve test correlation > 0.7",
            "Visualize learned filter activations",
            "Save model (TensorFlow .h5 format)",
            "Deliverable: Model + training curves + evaluation"
        ],
        dataset: "10,000 promoter regions (500bp) + expression labels",
        resources: [
            { name: "TensorFlow Tutorials", link: "https://tensorflow.org/tutorials", desc: "TensorFlow guide" },
            { name: "Deep Learning", link: "https://github.com/topics/deep-learning-genomics", desc: "DL resources" },
            { name: "PyTorch Docs", link: "https://pytorch.org/docs/stable/", desc: "PyTorch library" }
        ]
    },
    14: {
        title: "Week 14: Genetic Variant Classification (98%+ AUROC)",
        description: "Feature engineering, imbalanced learning, interpretability",
        phase: 3,
        duration: "7 days",
        project: "Clinical variant pathogenicity prediction",
        outcome: "Production ML classifier with interpretable predictions",
        topics: ["Feature Engineering", "Imbalanced Learning", "Ensemble Methods", "Explainability"],
        tasks: [
            "Engineer 50 features (conservation, impact, frequency)",
            "Handle class imbalance: SMOTE or class weights",
            "Train ensemble: XGBoost + LightGBM + Neural Network",
            "Achieve test AUROC > 0.95, AUPRC > 0.90",
            "Implement SHAP for feature importance",
            "Create clinical report with predictions",
            "Deliverable: Ensemble model + SHAP analysis"
        ],
        dataset: "2000 variants (1800 benign, 200 pathogenic) + 50 features",
        resources: [
            { name: "XGBoost", link: "https://xgboost.readthedocs.io/", desc: "Gradient boosting" },
            { name: "SHAP Values", link: "https://github.com/slundberg/shap", desc: "Model explanation" },
            { name: "Imbalanced Learning", link: "https://imbalanced-learn.org/", desc: "Handling imbalance" }
        ]
    },
    15: {
        title: "Week 15: Docker Containerization",
        description: "Dockerfile, multi-stage builds, Docker Compose, best practices",
        phase: 4,
        duration: "7 days",
        project: "Containerize a bioinformatics pipeline",
        outcome: "Production-ready Docker container",
        topics: ["Docker Basics", "Dockerfile", "Optimization", "Docker Compose", "Registry"],
        tasks: [
            "Create Dockerfile: Python 3.11, install dependencies",
            "Build image: bioinformatics-pipeline:v1.0",
            "Test locally: container runs pipeline correctly",
            "Implement .dockerignore (exclude unnecessary files)",
            "Optimize image size (multi-stage build)",
            "Push to Docker Hub or Azure Container Registry",
            "Create docker-compose.yml for multi-container setup",
            "Deliverable: Dockerfile + compose file + registry link"
        ],
        dataset: "Bioinformatics pipeline code",
        resources: [
            { name: "Docker Docs", link: "https://docs.docker.com/", desc: "Official Docker" },
            { name: "Docker for Bio", link: "https://biocontainers.pro/", desc: "Bioinformatics containers" },
            { name: "Best Practices", link: "https://docs.docker.com/develop/dev-best-practices/", desc: "Docker best practices" }
        ]
    },
    16: {
        title: "Week 16: Azure Cloud Platforms",
        description: "Azure VMs, storage, data warehouse, managed databases",
        phase: 4,
        duration: "7 days",
        project: "Deploy ML pipeline to Azure",
        outcome: "Scalable cloud infrastructure for analysis",
        topics: ["Azure VMs", "Storage", "Databases", "Container Instances", "ML Service"],
        tasks: [
            "Create Azure resource group and storage account",
            "Set up Azure SQL Database for variant storage",
            "Upload training data to Azure Blob Storage",
            "Train model on Azure compute (GPU VM optional)",
            "Deploy model to Azure Container Instances",
            "Create REST API endpoint for predictions",
            "Set up monitoring and logging",
            "Deliverable: Azure setup docs + API endpoint"
        ],
        dataset: "Training data and variant models",
        resources: [
            { name: "Azure Free Account", link: "https://azure.microsoft.com/en-us/free/", desc: "Free Azure tier" },
            { name: "Azure Docs", link: "https://docs.microsoft.com/en-us/azure/", desc: "Azure documentation" },
            { name: "Azure ML", link: "https://azure.microsoft.com/en-us/services/machine-learning/", desc: "ML on Azure" }
        ]
    },
    17: {
        title: "Week 17: CI/CD Pipelines",
        description: "GitHub Actions, testing, automated deployment",
        phase: 4,
        duration: "7 days",
        project: "Continuous integration for bioinformatics tool",
        outcome: "Automated testing and deployment workflow",
        topics: ["GitHub Actions", "Unit Testing", "Integration Testing", "Automated Deployment"],
        tasks: [
            "Create GitHub repository with CI/CD workflow",
            "Implement unit tests (pytest): 80%+ coverage",
            "Set up GitHub Actions: run tests on push",
            "Automated Docker image build on tag",
            "Deploy container to Azure on release",
            "Create CI/CD process documentation",
            "Add badges to README",
            "Deliverable: .github/workflows/ + test suite"
        ],
        dataset: "Bioinformatics tool with test data",
        resources: [
            { name: "GitHub Actions", link: "https://github.com/features/actions", desc: "Actions documentation" },
            { name: "pytest Docs", link: "https://docs.pytest.org/", desc: "Testing framework" },
            { name: "GitOps", link: "https://www.gitops.tech/", desc: "GitOps practices" }
        ]
    },
    18: {
        title: "Week 18: Workflow Orchestration (Nextflow/Snakemake)",
        description: "Nextflow DSL2, process definition, parameterization, resumable workflows",
        phase: 4,
        duration: "7 days",
        project: "Nextflow pipeline: FASTQ → Variants → Interpretation",
        outcome: "Scalable, resumable bioinformatics pipeline",
        topics: ["Nextflow DSL2", "Process Definition", "Channels", "Configuration", "HPC Integration"],
        tasks: [
            "Define 4 processes: QC, Align, CallVariants, Annotate",
            "Create nextflow.config with resource requirements",
            "Implement input channels: [sampleID, reads_R1, reads_R2]",
            "Add error handling and retry logic",
            "Test locally and on HPC (SLURM)",
            "Generate execution report (timeline, resources)",
            "Add GitHub documentation",
            "Deliverable: main.nf + nextflow.config + report"
        ],
        dataset: "Sample genomic data for pipeline",
        resources: [
            { name: "Nextflow", link: "https://www.nextflow.io/docs/latest/", desc: "Nextflow guide" },
            { name: "Snakemake", link: "https://snakemake.readthedocs.io/", desc: "Snakemake guide" },
            { name: "nf-core", link: "https://nf-co.re/", desc: "Community pipelines" }
        ]
    },
    19: {
        title: "Week 19: RAG-Based GenAI Integration",
        description: "Vector embeddings, RAG pipeline, LLM prompting, LangChain",
        phase: 5,
        duration: "7 days",
        project: "RAG chatbot for genomic data queries",
        outcome: "AI assistant answering bioinformatics questions",
        topics: ["Vector Embeddings", "RAG", "LLM Integration", "Prompt Engineering", "LangChain"],
        tasks: [
            "Index 100+ genomics papers with embeddings",
            "Build retrieval system: vector similarity search",
            "Integrate LLM (OpenAI or open-source)",
            "Create prompt template: context + query → answer",
            "Build web interface (Streamlit or React)",
            "Test with 20 domain-specific queries",
            "Evaluate answer quality and relevance",
            "Deliverable: Chatbot application + deployment"
        ],
        dataset: "Genomic literature corpus (papers, docs)",
        resources: [
            { name: "LangChain", link: "https://python.langchain.com/", desc: "LLM framework" },
            { name: "OpenAI API", link: "https://openai.com/api/", desc: "GPT models" },
            { name: "RAG", link: "https://arxiv.org/abs/2005.11401", desc: "RAG paper" }
        ]
    },
    20: {
        title: "Week 20: Single-Cell Metabolomics Analysis",
        description: "Single-cell data preprocessing, dimensionality reduction, cell type annotation",
        phase: 5,
        duration: "7 days",
        project: "Analyze single-cell metabolomics dataset",
        outcome: "Cell type classification with metabolic insights",
        topics: ["Single-Cell Data", "QC", "Normalization", "Dimensionality Reduction", "Clustering"],
        tasks: [
            "Load H5AD file (5000 cells × 200 metabolites)",
            "Normalize counts (library-size normalization)",
            "Perform QC: filter cells/metabolites",
            "Dimensionality reduction: PCA → UMAP",
            "Cluster cells (Leiden, k=10)",
            "Identify marker metabolites per cluster",
            "Annotate clusters (immune, metabolic, tumor)",
            "Create interactive visualization",
            "Deliverable: Annotated AnnData + cluster report"
        ],
        dataset: "5000 cells × 200 metabolites (h5ad format)",
        resources: [
            { name: "Scanpy", link: "https://scanpy.readthedocs.io/", desc: "Single-cell analysis" },
            { name: "AnnData", link: "https://anndata.readthedocs.io/", desc: "Data format" },
            { name: "Single-Cell", link: "https://github.com/topics/single-cell", desc: "Resources" }
        ]
    },
    21: {
        title: "Week 21: Cancer Genomics & Immunotherapy",
        description: "Single-cell RNA-seq, tumor heterogeneity, neoantigen prediction",
        phase: 5,
        duration: "7 days",
        project: "Tumor heterogeneity and immune profiling",
        outcome: "Tumor subclones and immune landscape",
        topics: ["scRNA-seq", "Tumor Subclones", "Immune Cells", "Neoantigens", "Cell Interactions"],
        tasks: [
            "Load scRNA-seq data (10k cells, 3 patients)",
            "Filter by QC metrics (nGenes, %MT, nUMI)",
            "Integrate samples (harmony or scVI)",
            "Identify tumor subclones (CopyKAT)",
            "Characterize immune cells (CD8+, macrophages)",
            "Predict neoantigen candidates (top 5 mutations)",
            "Analyze immune-tumor interactions",
            "Deliverable: Subclone annotation + immune profile"
        ],
        dataset: "scRNA-seq from TCGA/GEO (10k cells, 3 patients)",
        resources: [
            { name: "Seurat", link: "https://satijalab.org/seurat/", desc: "Integration analysis" },
            { name: "CellChat", link: "http://www.naverauj.com/cellchat/", desc: "Cell interactions" },
            { name: "TCGA", link: "https://www.cancer.gov/tcga", desc: "Cancer data" }
        ]
    },
    22: {
        title: "Week 22: Production Deployment & Maintenance",
        description: "API development, monitoring, versioning, documentation",
        phase: 5,
        duration: "7 days",
        project: "Production-grade variant prediction service",
        outcome: "Deployed, monitored clinical tool",
        topics: ["REST API", "Monitoring", "Versioning", "Documentation", "Authentication"],
        tasks: [
            "Build FastAPI REST API for predictions",
            "Implement request validation and error handling",
            "Deploy to Azure App Service or AWS Lambda",
            "Set up monitoring: logs, metrics, alerts",
            "Implement model versioning (v1.0, v1.1)",
            "Create OpenAPI/Swagger documentation",
            "Add JWT authentication",
            "Deliverable: Deployed API + monitoring"
        ],
        dataset: "Variant models and test data",
        resources: [
            { name: "FastAPI", link: "https://fastapi.tiangolo.com/", desc: "API framework" },
            { name: "Prometheus", link: "https://prometheus.io/", desc: "Monitoring" },
            { name: "REST API", link: "https://restfulapi.net/", desc: "REST principles" }
        ]
    },
    23: {
        title: "Capstone 1: End-to-End Clinical Variant Prediction Pipeline",
        description: "Complete pipeline from raw sequencing to clinical predictions",
        phase: 6,
        duration: "14 days",
        project: "Production clinical bioinformatics system",
        outcome: "Complete, deployed variant pipeline with UI",
        topics: ["Pipeline Integration", "Variant Analysis", "ML Prediction", "Deployment"],
        tasks: [
            "Build complete Nextflow pipeline",
            "ML classifier: 95%+ sensitivity/specificity",
            "Docker container + Azure deployment",
            "REST API + web UI",
            "Clinical PDF report generation",
            "Complete GitHub documentation",
            "User manual and deployment guide",
            "Deliverable: Full system + documentation"
        ],
        dataset: "Real or synthetic genomic samples",
        resources: [
            { name: "GATK", link: "https://gatk.broadinstitute.org/", desc: "Variant calling" },
            { name: "nf-core", link: "https://nf-co.re/", desc: "Pipelines" },
            { name: "GA4GH", link: "https://github.com/GA4GH/standards", desc: "Standards" }
        ]
    },
    24: {
        title: "Capstone 2: RAG-Augmented Genomic Chatbot",
        description: "AI-powered assistant for genomic data analysis",
        phase: 6,
        duration: "14 days",
        project: "Production GenAI chatbot for bioinformatics",
        outcome: "Deployed chatbot with high-quality responses",
        topics: ["RAG", "LLM", "Vector DB", "Web Dev", "Deployment"],
        tasks: [
            "Build Streamlit/React chatbot interface",
            "Index 500+ genomics documents with embeddings",
            "LLM integration with prompt optimization",
            "Deploy to cloud (Heroku/Azure)",
            "User testing: 30+ queries with evaluation",
            "Complete GitHub documentation",
            "Create demo video",
            "Deliverable: Deployed chatbot + documentation"
        ],
        dataset: "Genomic literature and documentation (500+ docs)",
        resources: [
            { name: "Streamlit", link: "https://streamlit.io/", desc: "Web framework" },
            { name: "LangChain", link: "https://github.com/hwchase17/langchain", desc: "LLM tools" },
            { name: "Pinecone", link: "https://www.pinecone.io/", desc: "Vector DB" }
        ]
    }
};
