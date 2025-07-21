import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Application Developer',
    company: 'Amhara Bank',
    date: '2023 - Present',
    highlights: [
      'Mobile Banking Application Development & Maintenance',
      'Merchant Application & Dashboard Development',
      'Shareholder Application & Dashboard Development',
      'Third-Party Integrations',
      'Utility Service Solutions',
      'Development of Various Applications',
    ],
  },
  {
    id: 2,
    role: 'Junior Application Developer Officer',
    company: 'Amhara Bank',
    date: '2022 - 2023',
    highlights: [
      'Developed full ERP system (HR, Payroll, Inventory, etc.)',
      'Mobile banking enhancements and integrations',
      'Merchant app and dashboard design and development',
      'Modernized legacy codebases',
      'Full SDLC participation',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Experience</h2>
      <div className="relative w-full max-w-3xl">
        <div className="border-l-4 border-[var(--color-primary)] absolute h-full left-4 top-0"></div>
        <div className="flex flex-col gap-10 ml-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative bg-[var(--color-background-2)] rounded-xl shadow-lg p-6">
              <div className="absolute -left-8 top-6 w-6 h-6 bg-[var(--color-primary)] rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-bold text-[var(--color-primary)]">{exp.role}</h3>
              <div className="text-base font-semibold text-[var(--color-botton)]">{exp.company}</div>
              <div className="text-sm text-gray-400 mb-2">{exp.date}</div>
              <ul className="list-disc ml-6 text-[var(--color-primary)]">
                {exp.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
