import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Application Developer',
    company: 'Amhara Bank',
    date: '13/2025 – present',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      `Mobile Banking Application Development & Maintenance
, Developed and maintained a secure and scalable mobile banking
application. `,
      `Merchant Application & Dashboard Development
, Built a merchant application for seamless transactions, order
management, and financial tracking.`,
      `Shareholder Application & Dashboard Development.
,Designed and implemented a shareholder management
application.`,
      `Third-Party Integrations
, Integrated external APIs and services into banking and financial
applications.`,
      `Utility Service Solutions
, Develop different utility application like emailing service, sms
service`,
      `Development of Various Applications
, Worked on multiple applications, including ERP systems, internal
banking tools, and self-service platforms.
, Built APIs and microservices to support different banking and
financial operations.`,
    ],
  },
  {
    id: 2,
    role: 'Junior Application Developer Officer',
    company: 'Amhara Bank',
    date: '07/2023 – 02/2025',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Develop full ERP system that have HR, Payroll, Inventory and stock management, Vacancy system and other utilities like KYC upload web  application, SMS and Email sender service and other services',
      'Develop and add functionality on mobile banking, integrating to third  party, develop additional functionality and update and make existing functionality more effective for use and easy access for customer.',
      'Design both merchant app and merchant dashboard and portal, anddevelop for bank with currently have more than 3 thousand merchant users',
      'Contribute to API development from bank side to third parties.',
      'Customization effective and productive different open- source projects like E-learning and E-exam system',
      'Developing Shareholder web application and mobile application to the bank shareholders',
      'Collaborate and develop different services and application like lottery system and other applications which is the bank currently use',
      'Revised, modularized and updated old code bases to modern development standards, improving functionality',
      'Collaborated on stages of software development lifecycle from requirement gathering to production releases',
      'Coordinated with project management on database development timelines and deploying to production environment'
    ],
  },

  {
    id: 3,
    role: 'Information technology officer ',
    company: 'Amhara Bank',
    date: '06/2022 - 06/2023',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Guided testing process and validation for major internal software`s',
      'Developed in house systems and other system which the bank uses currently like External and internal vacancy system, Stock management system, staff self-service system and other internal services',
      'By making a good contribution to those and other system`s I got appreciation certificate from the bank CEO'
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Experience</h2>
      <div className="relative w-full max-w-3xl">
        {/* Timeline vertical line */}
        <div className="hidden md:block left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[var(--color-primary)]/60  z-0" style={{ transform: 'translateX(-50%)' }}></div>
        <div className="flex flex-col gap-12 z-10">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center w-1 relative">
                <span className="w-6 h-6 rounded-full bg-[var(--color-botton)] border-4 border-white shadow-lg animate-bounce" style={{ marginTop: idx === 0 ? 0 : '2rem' }}></span>
                {idx < experiences.length - 1 && <div className="flex-1 w-1 bg-gradient-to-b from-[var(--color-botton)]/60 to-transparent"></div>}
              </div>
              {/* Card */}
              <div className="flex-1 bg-white/10 backdrop-blur-md border border-gray-100 rounded-2xl p-8 transition-transform hover:scale-[1.025] duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[var(--color-primary)]">{exp.role}</h3>
                  <span className="text-base font-semibold text-[var(--color-botton)] mt-2 md:mt-0">{exp.company}</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">{exp.date}</div>
                <ul className="list-disc ml-6 text-[var(--color-primary)] space-y-1">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
