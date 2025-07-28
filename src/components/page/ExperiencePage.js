import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';

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
    description: "",
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
    description: '',
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
    description: '',
  },
];

export default function ExperiencePage() {

  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
   useEffect(()=>{
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('experience').select('*').order('id', { ascending: false });
        if (error) throw error;
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);
  console.log('experiences', experiences);
  

  if (loading) {
    return <div className="text-center text-[var(--color-primary)]">Loading...</div>;
  }

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">
      Experience
      </h1>
      <div className="relative w-full max-w-3xl">
        <div className="absolute left-8 top-5 h-full border-l-2 border-dashed border-gray-300 z-0" />
        <div className="flex flex-col gap-16 relative z-10">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="grid flex-row md:gap-2 relative">
              <div className="items-center mb-0  min-w-[10px] md:min-w-[100px]">
                <span className="bg-white text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-xs md:text-sm font-semibold shadow mb-2 mt-1 whitespace-nowrap z-10">
                  {exp.date}
                </span>
                <div className="w-0.5 flex-1 bg-gray-700" />
              </div>
              <div className="flex-1 ml-20 md:ml-10 sm:ml-5 rounded-2xl p-4 md:p-6 border border-[var(--color-secondary)] mt-2">
                <div className="flex items-center gap-3 md:gap-4 mb-2">
                  {/* {exp.logo && <img src={exp.logo} alt={exp.company || "Company Logo"} className="w-10 h-10 md:w-10 md:h-12 object-contain rounded bg-white p-1 border border-[var(--color-secondary)]" />} */}
                  <div>
                    <div className="text-base md:text-lg font-bold text-[var(--color-primary)]">{exp.role}</div>
                    <div className="text-sm md:text-base font-semibold text-[var(--color-botton)]">@{exp.company}</div>
                  </div>
                </div>
                {exp.description && <div className="text-[var(--color-primary)] mb-2 text-xs md:text-sm">{exp.description}</div>}
                <ul className="list-none pl-0 text-[var(--color-primary)] text-xs md:text-sm space-y-1">
                  {/* {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-lg text-[var(--color-botton)] mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))} */}
                  {exp.highlights && Array.isArray(exp.highlights)
                    ? exp.highlights.map((tech, i) => (                     
                        <li key={i} className="flex items-start gap-2">
                      <span className="text-lg text-[var(--color-botton)] mt-0.5">›</span>
                      <span>{tech}</span>
                    </li>
                    ))
                    : typeof exp.highlights === 'string'
                      ? exp.highlights.split(',').map((tech, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-lg text-[var(--color-botton)] mt-0.5">›</span>
                          <span>{tech.trim()}</span>
                        </li>
                      ))
                      : null}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
