export const resume = {
    personal: {
        name: "Jarboui Achraf",
        title: "DevOps  Engineer — DevOps Cloud Enthusiast",
        email: "achraf.jarboui@ensi-uma.tn",
        phone: "+216 25 876 462",
        links: {
            linkedin: "https://www.linkedin.com/in/achraf-jarboui/",
            github: "https://github.com/Achraf-JB",
            medium: "https://medium.com/@achraf.jarboui" // Added Medium link
        },
        summary: "Software Engineer and DevOps specialist focused on automating end-to-end workflows with an 'automation-first' mindset. Currently specializing in DevSecOps, Cloud infrastructure, and MLOps, with a core mission to simplify complex architectures, minimize operational costs, and reduce time-to-market through intelligent automation."
    },
    skills: {
        automation: ["Ansible"],
        cloud: ["Azure (AI Certified)", "AWS (Preparing for Practitioner)", "OpenStack"],
        languages: ["Python", "Bash", "Java", "C++", "JavaScript"],
        containers: ["Docker", "Docker Compose", "Kubernetes"],
        monitoring: ["Prometheus", "Grafana"],
        os: ["Linux (Ubuntu, CentOS)", "Windows"],
        cicd: ["Jenkins", "Azure DevOps", "GitLab-CI", "GitHub Actions"],
        web: ["Next.js", "NestJS", "ReactJS", "NodeJs", "HTML", "CSS"],
        database: ["SQL", "MongoDB"]
    },
    education: [
        {
            school: "National School of Computer Sciences (ENSI)",
            degree: "Computer Science Engineering",
            period: "2022 – 2025"
        },
        {
            school: "Preparatory Institute for Engineering Studies",
            degree: "Pre-Engineering Degree",
            period: "2020 – 2022"
        }
    ],
    experience: [
        {
            company: "KPIT",
            role: "DevOps Engineer",
            period: "Dec 2025 – Present",
            description: [
                "Designing and implementing CI/CD pipelines using GitLab CI/CD.",
                "Containerizing applications with Docker and managing orchestration using Docker Compose and Kubernetes.",
                "Managing infrastructure as code with Ansible.",
                "Implementing observability solutions through Prometheus, Grafana, and ELK Stack."
            ],
            keywords: ["DevOps", "GitLab CI/CD", "Docker", "Kubernetes", "Ansible", "Grafana", "Prometheus", "Zuul"]
        },
        {
            company: "Creative Comet",
            role: "Full Stack DevOps Engineer",
            period: "Sep 2025 – Nov 2025",
            description: [
                "Built and deployed the application from scratch (Next.js, NestJS, Prisma, PostgreSQL).",
                "Designed and implemented a 3-tier AWS architecture using EC2, RDS, and S3.",
                "Set up automatic EC2 vertical scaling.",
                "Migrated project from OVH to AWS."
            ],
            keywords: ["Next.Js", "NestJs", "PostgreSQL", "AWS", "Docker", "DevOps", "Full Stack"]
        },
        {
            company: "KPIT",
            role: "DevOps Engineer intern (PFE)",
            period: "Feb 2025 – Jun 2025",
            description: [
                "Implementing a complete CI/CD pipeline for a Django application using GitLab CI/CD.",
                "Automating infrastructure deployment with Ansible and Docker Compose.",
                "Integrating monitoring with Prometheus and Grafana.",
                "Enhancing code quality with SonarQube."
            ]
        },
        {
            company: "Primatec Engineering",
            role: "DevOps Engineer Intern",
            period: "Jul 2024 – Aug 2024",
            description: [
                "Deployed and managed OpenStack using Charms, MAAS, and Juju.",
                "Integrated MAAS for hardware provisioning."
            ]
        },
        {
            company: "Primatec Engineering",
            role: "Software Engineer Intern",
            period: "Jul 2023 – Aug 2023",
            description: [
                "Developed a dynamic sanity check dashboard with Python Dash and Plotly."
            ]
        }
    ],
    projects: [
        {
            name: "DevOps CI/CD Pipeline with Azure DevOps, Terraform, SonarQube, and Kubernetes (AKS)",
            date: "Oct 2024 – Nov 2024",
            details: [
                "Provisioned AKS, ACR, and VMs on Azure with Terraform.",
                "Developed Azure DevOps CI/CD pipeline for MERN stack.",
                "Implemented quality gates with SonarQube.",
                "Implementing observability solutions through Prometheus, Grafana"
            ],
            technologies: ["Azure DevOps", "Terraform", "Kubernetes (AKS)", "SonarQube", "Prometheus", "Grafana"]
        },
        {
            name: "DevOps CI/CD Pipeline with Jenkins, Nexus, SonarQube, Docker, and Kubernetes (AKS)",
            date: "Sep 2024 – Oct 2024",
            details: [
                "Set up Jenkins CI/CD pipeline on Azure VM.",
                "Integrated SonarQube and Trivy for security scanning.",
                "Automated Docker image deployment to AKS with ArgoCD."
            ],
            technologies: ["Jenkins", "ArgoCD", "Docker", "Nexus", "Trivy", "Prometheus", "Grafana", "K8s", "Azure"]
        },
        {
            name: "Smart ChatBot Application",
            date: "Feb 2024 – May 2024",
            details: [
                "Developed a ChatBot utilizing voice recognition and text-to-speech technologies.",
                "Implemented command classification, lighting control, and music playback.",
                "Integrated Python backend with React frontend."
            ],
            technologies: ["Python", "React", "NLP", "Voice Recognition"]
        }
    ]
};
