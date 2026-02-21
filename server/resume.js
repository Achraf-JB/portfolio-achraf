const resume = {
    personal: {
        name: "Jarboui Achraf",
        title: "Software Engineer — DevOps Cloud Enthusiast",
        email: "achraf.jarboui@ensi-uma.tn",
        phone: "+216 25 876 462",
        links: {
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        summary: "Recent Computer Science graduate with a strong foundation in Software Engineering, specializing in software integration, DevOps, and cloud technologies. Certified in Azure AI Fundamentals, with hands-on experience in CI/CD pipelines, containerization, and infrastructure automation."
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
            keywords: ["DevOps", "GitLab CI/CD", "Docker", "Kubernetes", "Ansible", "Grafana", "Prometheus"]
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
                "Developed Azure DevOps CI/CD pipeline for MERN stack."
            ]
        },
        {
            name: "DevOps CI/CD Pipeline with Jenkins, Nexus, SonarQube, Docker, and Kubernetes (AKS)",
            date: "Sep 2024 – Oct 2024",
            details: [
                "Set up Jenkins CI/CD pipeline on Azure VM.",
                "Integrated SonarQube and Trivy.",
                "Automated Docker image deployment to AKS with ArgoCD."
            ]
        },
        {
            name: "Development and Design Project — ENSI",
            date: "Feb 2024 – May 2024",
            details: [
                "Developed a ChatBot application for the EIH Club utilizing voice recognition."
            ]
        }
    ],
    education: [
        {
            school: "NATIONAL SCHOOL OF COMPUTER SCIENCE (ENSI)",
            degree: "National Computer Science Engineering Degree",
            period: "Sep 2022 – Jun 2025"
        },
        {
            school: "Preparatory institute for engineering studies in Sfax(IPEIS)",
            period: "Sep 2020 – Jun 2022"
        }
    ]
};

module.exports = resume;
