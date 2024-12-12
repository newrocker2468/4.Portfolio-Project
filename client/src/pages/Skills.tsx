import React from 'react';
import '../styles/Skills.css';

const skills = {
    "MY SKILLS": {
        "Front-end Development": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Zustand",
            "Tailwind CSS",
            "Framer Motion",
            "DOM",
            "Unit Test",
            "Performance Optimize",
            "SSR"
        ],
        "Back-end Development": [
            "Node",
            "Bun",
            "Express",
            "REST API",
            "Zod Validation",
            "JWT/OAuth",
            "SQL",
            "Postgres",
            "Prisma ORM",
            "DB Modeling",
            "Stripe Payments"
        ],
        "General Programming and Tools": [
            "JavaScript",
            "TypeScript",
            "Python",
            "Go",
            "React Native",
            "Git",
            "GitHub",
            "Linux",
            "WordPress",
            "UX/UI Design",
            "Product Design",
            "Figma",
            "Adobe XD",
            "VPS",
            "Vercel",
            "Wireframe"
        ]
    }
};

const Skills: React.FC = () => {
    return (
        <div className="container">
            <h1 className="title">{Object.keys(skills)[0]}</h1>
            <div className="skills">
                {Object.entries(skills["MY SKILLS"]).map(([category, skillList]) => (
                    <div key={category} className="skill-category">
                        <h2>{category}</h2>
                        <ul>
                            {skillList.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
