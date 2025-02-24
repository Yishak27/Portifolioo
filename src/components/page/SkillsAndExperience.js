import { Box, Card, DataList, Flex, Grid, ScrollArea, Section, Separator, Text } from '@radix-ui/themes';
import React from 'react';
import ExperiencePage from './ExperiencePage';
import { Divider } from '@mui/material';
const SkillsAndExperiences = () => {
    return (
        <div className="skills-container">
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

// export default SkillsAndExperience;

const data = [{
    "id": "01",
    "category": "Programming Language",
    "list": ["C#", "JavaScript", "Typescript", "Python", "Bun"]
}, {
    "id": "02",
    "category": "Framework",
    "list": ["Asp.net", ".net Web Api", "React Js", "Nodejs", "Expressjs", "Flask", "Nest js"]
}, {
    "id": "03",
    "category": "Database",
    "list": ["Ms Sql Server", "Postgres", "Mysql", "MongoDB", "Redis"]
}, {
    "id": "04",
    "category": "Dev Tools and Deployment",
    "list": ["Docker", "Postman", "Jmeter", "CI/CD", "Nginx", "Apache", "Visual Studio", "VsCode", "Web service", "Git & Github", "IIs"]
}, {
    "id": "05",
    "category": "other",
    "list": ["Communication", "Problem Solving", "SDLC", "Agile", "Temenos(T24)", "Customization (Moodle, Odoo)"]
}];

const experience = [{

}]
const SkillsAndExperience = () => {
    return (
        <>
            <ScrollArea scrollbars='vertical' className='rounded-md border bg-red-500'>
                <Text as='div' className='pb-20' weight='bold' size={{ md: "6", sm: '5', xs: "4" }}
                    mt={{ lg: "2", md: "3" }}>Skill</Text>
                <Divider className='p-10'  />
                <Grid className='mt-5' columns={{ lg: "2", md: "2", sm: "1", xl: "1", xs: "1" }} gap='2'>
                    <DataList.Root m={{ lg: "0" }}>
                        <Text as='div' size={{ lg: "4" }} weight='bold'> {data[0].category}</Text>
                        <DataList.Item>
                            {data[0].list.map(items =>
                                <Text key={items} size="2" ml={{ lg: '3' }}>■ {items}</Text>
                            )}
                        </DataList.Item>
                    </DataList.Root>

                    <DataList.Root m={{ lg: "2" }}>
                        <Text as='div'
                            size={{ lg: "4" }}
                            weight='bold'> {data[2].category}</Text>
                        <DataList.Item>
                            {data[2].list.map(items =>
                                <Text key={items} size="2" ml={{ lg: '3' }}>■ {items}</Text>
                            )}
                        </DataList.Item>
                    </DataList.Root>

                    <DataList.Root m={{ lg: "2" }}>
                        <Text as='div' size={{ lg: "4" }} weight="bold"> {data[1].category}</Text>
                        <DataList.Item>
                            {data[1].list.map(items =>
                                <Text key={items} size="2" ml={{ lg: '1' }}>■ {items}</Text>
                            )}
                        </DataList.Item>
                    </DataList.Root>

                    <DataList.Root m={{ lg: "2" }}>
                        <Text as='div' size={{ lg: "4" }} weight="bold"> {data[4].category}</Text>
                        <DataList.Item>
                            {data[4].list.map(items =>
                                <Text key={items} size="2" ml={{ lg: '1' }}>■ {items}</Text>
                            )}
                        </DataList.Item>
                    </DataList.Root>

                </Grid>
                <Box>
                    <DataList.Root m={{ lg: "2" }}>
                        <Text as='div' size={{ lg: "5", md: "3", sm: "4" }}
                            weight='bold'> {data[3].category}</Text>
                        <DataList.Item>
                            {data[3].list.map(items =>
                                <Text key={items} size="2" ml={{ lg: '1' }}>■ {items}</Text>
                            )}
                        </DataList.Item>
                    </DataList.Root>
                </Box>
                {/* Expiernce */}
                <Separator style={{ width: "auto" }} mt={{ lg: "3", md: "2" }} />
                <ExperiencePage />
            </ScrollArea>
        </>
    )
}

export default SkillsAndExperience;