import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectDetails = {
  '1': {
    title: 'Banking App',
    description: 'A modern banking platform with real-time notifications, analytics, and secure transactions. Built with React, Node.js, and PostgreSQL.',
    image: '/logo.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    links: [
      { label: 'Demo', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  '2': {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my work, skills, and experience. Built with React and Tailwind CSS.',
    image: '/logo.jpg',
    tech: ['React', 'Tailwind CSS'],
    links: [
      { label: 'Live', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  '3': {
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce solution with payment integration and admin dashboard. Built with Next.js and MongoDB.',
    image: '/logo.jpg',
    tech: ['Next.js', 'MongoDB', 'Stripe'],
    links: [
      { label: 'Demo', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <div className="text-center py-20 text-2xl">Project not found.</div>;
  }

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-[var(--color-background-2)] rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-lg mb-4" />
        <h2 className="text-3xl font-bold text-[var(--color-primary)]">{project.title}</h2>
        <p className="text-lg text-[var(--color-primary)]">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium">{tech}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          {project.links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors">{link.label}</a>
          ))}
        </div>
        <Link to="/projects" className="mt-6 text-[var(--color-botton)] hover:underline">← Back to Projects</Link>
      </div>
    </section>
  );
} 