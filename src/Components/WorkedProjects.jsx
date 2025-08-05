import "./WorkedProjects.css";

const workedProjects = [
    {
        company: "TATA Technologies Limited",
        role: "Dev Engineer",
        project: "Connected Vehicle Platform",
        duration: "2021 – Current",
        description:
            "Built backend systems for collecting telematics data from TCU devices in cars. Designed secure APIs and optimized Spring Boot services for production stability.",
        responsibilities: [
            "Developed backend APIs to collect TCU data from cars.",
            "Implemented JWT-based authentication and request signing.",
            "Debugged and optimized Spring Boot services.",
            "Integrated RESTful APIs for telematics data flow.",
        ],
        techStack: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "JWT",
            "PostgreSQL",
            "Linux",
            "Git",
        ],
    },
    {
        company: "4Fin Technologies",
        role: "Software Engineer",
        project: "Loan Origination System (LOS) Portal",
        duration: "2020 – 2021",
        description:
            "Developed a comprehensive digital loan management system integrating CIBIL scoring, eKYC, eSign, and eNACH using Digio. Enabled secure customer onboarding and loan approval automation.",
        responsibilities: [
            "Built APIs to manage customer onboarding and loan data.",
            "Integrated CIBIL API for credit score retrieval.",
            "Used Digio APIs for eKYC, eSign, and eNACH.",
            "Verified customer's loan history for eligibility.",
        ],
        techStack: [
            "Java",
            "Spring Boot",
            "MySQL",
            "Digio",
            "Swagger",
            "Postman",
            "GitHub",
        ],
    },
    {
        company: "Cincognito Pvt. Ltd.",
        role: "Associate Engineer",
        project: "Company Website & CMS Development",
        duration: "2019 – 2020",
        description:
            "Developed and maintained a PHP-based company website and CMS for article publishing using WordPress. Managed data storage and deployment infrastructure.",
        responsibilities: [
            "Designed and developed the website using PHP.",
            "Created custom WordPress themes and templates.",
            "Created and managed MySQL databases for location-based data.",
            "Handled cPanel hosting and deployed company website.",
        ],
        techStack: [
            "PHP",
            "WordPress",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "cPanel",
        ],
    },
    // {
    //     company: "Self / Organization Internal",
    //     role: "Dev-Engineer",
    //     project: "Jira Data Center Setup & Project Configuration",
    //     duration: "2022 – Present",
    //     description:
    //         "Set up and managed Jira on Data Center for enterprise-level usage. Created and configured multiple Jira projects with optimal workflows, permissions, automations, and dashboards.",
    //     responsibilities: [
    //         "Installed and configured Jira Data Center on Linux servers with clustering.",
    //         "Created company-wide Jira projects for different teams and departments.",
    //         "Designed optimized workflows and permission schemes for each project.",
    //         "Set up Jira Service Management (JSM) with SLA and request types.",
    //         "Implemented Jira Automation for issue transitions, notifications, and field updates.",
    //         "Managed custom fields, issue types, and screen configurations.",
    //         "Integrated with Confluence, Bitbucket, and email systems.",
    //         "Trained users and admins on best practices and usage.",
    //         "Performed regular backup, upgrade, and performance tuning.",
    //     ],
    //     techStack: [
    //         "Jira Data Center",
    //         "Jira Service Management",
    //         "Linux",
    //         "MySQL",
    //         "Nginx",
    //         "Automation Rules",
    //         "AWS",
    //         "Git",
    //     ],
    // },
];

const WorkedProjects = () => {
    return (
        <section id="worked-projects" className="worked-projects-section">
            <h2 className="worked-projects-title">💼 Worked Projects</h2>
            <div className="worked-projects-container">
                {workedProjects.map((project, index) => (
                    <div className="worked-project-card" key={index}>
                        <h3>{project.company}</h3>
                        <p>
                            <strong>Role:</strong> {project.role}
                        </p>
                        <p>
                            <strong>Project:</strong> {project.project}
                        </p>
                        <p>
                            <strong>Duration:</strong> {project.duration}
                        </p>
                        <p>
                            <strong>Description:</strong> {project.description}
                        </p>

                        <ul>
                            {project.responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>

                        <p>
                            <strong>Technologies Used:</strong>{" "}
                            {project.techStack.join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkedProjects;
