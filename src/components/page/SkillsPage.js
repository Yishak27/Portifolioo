import React from 'react';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: '🟨', level: 90 },
      { name: 'TypeScript', icon: '🔷', level: 80 },
      { name: 'Python', icon: '🐍', level: 85 },
      { name: 'C#', icon: '⚙️', level: 75 },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', icon: '⚛️', level: 90 },
      { name: 'Node.js', icon: '🟩', level: 85 },
      { name: 'Express', icon: '🚂', level: 80 },
      { name: 'NestJS', icon: '🟥', level: 70 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: '🔧', level: 90 },
      { name: 'Docker', icon: '🐳', level: 75 },
      { name: 'Postman', icon: '📬', level: 80 },
      { name: 'JMeter', icon: '📊', level: 70 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {skills.map((group) => (
          <div key={group.category} className="bg-[var(--color-background-2)] rounded-xl shadow-lg p-6 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">{group.category}</h3>
            <ul className="flex flex-col gap-3">
              {group.items.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-[var(--color-primary)] w-24">{skill.name}</span>
                  <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-2 rounded-full bg-[var(--color-primary)]" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="text-xs text-gray-400 ml-2">{skill.level}%</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 