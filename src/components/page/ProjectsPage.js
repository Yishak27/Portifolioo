import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projectCategories = [
  {
    id: 'fullstack',
    title: 'Fullstack Developer',
    icon: '💻',
    projects: [
      {
        id: '1',
        title: 'Banking App',
        description: 'A modern banking platform with real-time notifications and analytics.',
        image: '/logo.jpg',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      },
      {
        id: '2',
        title: 'Portfolio Website',
        description: 'A personal portfolio to showcase my work and skills.',
        image: '/logo.jpg',
        tech: ['React', 'Tailwind CSS'],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    icon: '⚙️',
    projects: [
      {
        id: '3',
        title: 'E-commerce Platform',
        description: 'A scalable e-commerce solution with payment integration.',
        image: '/logo.jpg',
        tech: ['Next.js', 'MongoDB', 'Stripe'],
      },
    ],
  },
  {
    id: 'uiux',
    title: 'UI/UX Designer',
    icon: '🎨',
    projects: [
      {
        id: '4',
        title: 'Mobile Banking App Redesign',
        description: 'Redesigned the mobile banking app for a seamless and modern user experience.',
        image: '/logo.jpg',
        tech: ['Figma', 'Adobe XD', 'User Research'],
      },
    ],
  },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(projectCategories[0].id);

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Projects</h2>
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 w-full max-w-4xl">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 ${
              activeTab === cat.id
                ? 'bg-[var(--color-primary)] text-[var(--color-secondary)] shadow-lg scale-105'
                : 'bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-background-2)] hover:scale-105'
            }`}
          >
            {/* <span>{cat.icon}</span> */}
            <span>As a {cat.title}</span>
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="w-full max-w-4xl">
        {projectCategories.map((cat) => (
          <div
            key={cat.id}
            className={`flex flex-col gap-8 transition-all duration-500 ${
              activeTab === cat.id ? 'opacity-100' : 'hidden opacity-0'
            }`}
          >
            {cat.projects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-[var(--color-background-2)] rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch border-gray-50">
                <img src={project.image} alt={project.title} className="w-full md:w-48 h-24 md:h-auto object-cover" />
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-bold text-[var(--color-primary)]">{project.title}</h4>
                    <p className="text-base text-gray-300 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-[var(--color-botton)] text-white text-xs font-medium shadow">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Link to={`/projects/${project.id}`} className="px-4 py-2 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
} 