import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const categoryDetails = {
  fullstack: { title: 'Fullstack Developer', icon: '💻', order: 1 },
  backend: { title: 'Backend Developer', icon: '⚙️', order: 2 },
  uiux: { title: 'UI/UX Designer', icon: '🎨', order: 3 },
};

export default function ProjectsPage() {
  const [projectCategories, setProjectCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const projectsCollection = collection(db, 'projects');
        const q = query(projectsCollection, orderBy('order', 'asc'));
        const projectsSnapshot = await getDocs(q);
        const projectsData = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Projects Data:', projectsData);

        const grouped = projectsData.reduce((acc, project) => {
          const category = project.category || 'other';
          if (!acc[category]) {
            acc[category] = {
              id: category,
              title: categoryDetails[category]?.title || 'Other',
              icon: categoryDetails[category]?.icon || '✨',
              order: categoryDetails[category]?.order || 99,
              projects: [],
            };
          }
          acc[category].projects.push(project);
          return acc;
        }, {});
        setProjectCategories(Object.values(grouped));
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  console.log('Project Categories:', projectCategories);
  
  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center pb-10 overflow-x-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Projects</h2>      
      <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
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

      <div className="w-full max-w-4xl">
        {projectCategories.map((cat) => (
          <div
            key={cat.id}
            className={`flex flex-col gap-8 transition-all duration-500 ${
              activeTab === cat.id ? 'opacity-100' : 'hidden opacity-0'
            }`}
          >
            {cat.projects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-[var(--color-background-2)] rounded overflow-hidden flex flex-col md:flex-row items-stretch border-gray-400 ">
                <div className="md:w-48 w-full h-40 md:h-auto flex-shrink-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl" />
                </div>
                <div className="flex-1 flex flex-col justify-between md:ml-4 ml-0 border-[var(--color-tertiary)] border p-4 min-w-0">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-bold text-[var(--color-primary)]">{project.title}</h4>
                    <p className="text-base text-gray-500 mb-2 min-h-[3.5rem] line-clamp-3 overflow-hidden">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-[var(--color-botton)] text-white text-xs font-medium shadow">{tech}</span>
                      ))}
                    </div>
                  </div>
                  {/* <div className="flex justify-end mt-2">
                    <Link to={`/projects/${project.id}`} className="px-4 py-2 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors">View Details</Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
} 