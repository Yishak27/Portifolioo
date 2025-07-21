import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: '1',
    title: 'Banking App',
    description: 'A modern banking platform with real-time notifications and analytics.',
    image: '/logo.jpg',
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my work and skills.',
    image: '/logo.jpg',
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce solution with payment integration.',
    image: '/logo.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div key={project.id} className="bg-[var(--color-background-2)] rounded-xl shadow-lg p-4 flex flex-col items-center">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">{project.title}</h3>
            <p className="text-base text-[var(--color-primary)] mb-4 text-center">{project.description}</p>
            <Link to={`/projects/${project.id}`} className="px-4 py-2 rounded-md bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-botton)] transition-colors">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
} 