import { Divider } from '@mui/material';
import React from 'react'
import uuid from 'uuid';
import { v4 } from 'uuid';
const experience = [{
    id: v4,
    title: "Full Time | Addis Abeba | Ethiopia",
    company: "Amhara Bank",
    date: "06/2022 – 06/2023",
    position: "Information technology officer",
    list: ["•	Guided testing process and validation for major internal software's. ", "•	Developed in house systems and other system which the bank uses currently like External and internal vacancy system, Stock management system, staff self-service system and other internal services.",
        "•	By making a good contribution to those and other system's I got appreciation certificate from the bank CEO. "
    ]
}, {
    id: v4,
    title: "Full Time | Addis Abeba | Ethiopia",
    company: "Amhara Bank",
    date: "07/2023 – 02/2025",
    position: "Junior Application developer officer ",
    list: ["•	Develop full ERP system that have HR, Payroll, Inventory and stock management, Vacancy system and other utilities like KYC upload web application, SMS and Email sender service and other services",
        "•	Develop and add functionality on mobile banking, integrating to third party, develop additional functionality and update and make existing functionality more effective for use and easy access for customer. ",
        "•	Design both merchant app and merchant dashboard and portal, and develop for bank with currently have more than 3 thousand merchant users. ",
        "•	Revised, modularized and updated old code bases to modern development standards, improving functionality.",
        "•	Collaborated on stages of software development lifecycle from requirement gathering to production releases."
    ]
}, {
    id: v4,
    title: "Full Time | Addis Abeba | Ethiopia",
    company: "Amhara Bank",
    date: "13/2025 – present",
    position: "Application Developer",
    list: ["•	Mobile Banking Application Development & Maintenance",
        "•	Merchant Application & Dashboard Development",
        "•	Shareholder Application & Dashboard Development.",
        "•	Third-Party Integrations",
        "•	Utility Service Solutions",
        "•	Development of Various Applications"]
}]
export default function ExperiencePage() {
    return (
        <section className="experience-section">
            <h2>Experience</h2>
            {experience && experience.map((exp) => {
                return (
                    <div key={exp.id}>
                        <Divider />
                        <div style={{ paddingLeft: 20 }}>
                            <p className='h6 text-pretty'>
                                <strong>{exp.title}</strong>
                            </p>
                            <p>{exp.position}</p>
                            <p className=''>{exp.company}</p>
                            <p>{exp.date}</p>
                            {exp.list.map(items => {
                                return (
                                    <p>{items}</p>
                                )
                            })}
                        </div>
                        <Divider />
                    </div>
                )
            })}
        </section>
    )
}
