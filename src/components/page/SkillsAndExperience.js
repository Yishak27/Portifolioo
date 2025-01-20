import { Separator } from '@radix-ui/themes';
import React from 'react';
// import * as Separator from '@radix-ui/react-separator';
// import './App.css'; // Add your styles here

const SkillsAndExperience = () => {
    return (
        <div className="skills-container">
            {/* Skills Section */}
            <section className="skills-section">
                <h2>Skill</h2>
                <div className="skills-grid">
                    {/* Programming Languages */}
                    <div>
                        <h3>Programming Language</h3>
                        <ul>
                            <li>■ C#</li>
                            <li>■ JavaScript</li>
                            <li>■ Typescript</li>
                            <li>■ Python</li>
                            <li>■ Bun</li>
                        </ul>
                    </div>

                    {/* Frameworks */}
                    <div>
                        <h3>Framework</h3>
                        <ul>
                            <li>■ Asp.net</li>
                            <li>■ .net Web Api</li>
                            <li>■ React Js</li>
                            <li>■ Nodejs</li>
                            <li>■ Expressjs</li>
                            <li>■ Flask</li>
                            <li>■ Nest js</li>
                        </ul>
                    </div>

                    {/* Database */}
                    <div>
                        <h3>Database</h3>
                        <ul>
                            <li>■ Ms Sql Server</li>
                            <li>■ Postgres</li>
                            <li>■ Mysql</li>
                            <li>■ MongoDB</li>
                            <li>■ Redis</li>
                        </ul>
                    </div>

                    {/* Dev Tools and Deployment */}
                    <div>
                        <h3>Dev Tools and Deployment</h3>
                        <ul>
                            <li>■ Docker</li>
                            <li>■ Postman</li>
                            <li>■ Jmeter</li>
                            <li>■ CI/CD</li>
                            <li>■ Nginx</li>
                            <li>■ Apache</li>
                            <li>■ Visual Studio</li>
                            <li>■ VsCode</li>
                            <li>■ Web service</li>
                            <li>■ Git & Github</li>
                            <li>■ IIs</li>
                        </ul>
                    </div>

                    {/* Other */}
                    <div>
                        <h3>Other</h3>
                        <ul>
                            <li>■ Communication</li>
                            <li>■ Problem Solving</li>
                            <li>■ SDLC</li>
                            <li>■ Agile</li>
                            <li>■ Temenos(T24)</li>
                            <li>■ Customization (Moodle, Odoo)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* <Separator.Root className="separator" /> */}
            <Separator />
            {/* Experience Section */}
            <section className="experience-section">
                <h2>Experience</h2>
                <p>
                    <strong>Full Time | Addis Abeba | Ethiopia</strong>
                </p>
                <p>Amhara Bank</p>
                <p>2023 - Present</p>
            </section>
        </div>
    );
};

export default SkillsAndExperience;
