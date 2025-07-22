// import React, { useEffect, useState } from 'react';
// import { supabase } from '../../utils/supabase';

// const projectCategories = [
//   {
//     id: 'fullstack',
//     title: 'Fullstack Developer',
//     projects: [
//       {
//         id: '1',
//         title: 'Speech Recognition',
//         description: 'Amharic speech recognition convert amharic voice to text. which is open source any one can participate.',
//         image: '/speech.jpg',
//         tech: ['React', 'Flask', 'PostgreSQL', 'Material UI', 'Voice model'],
//       },
//       {
//         id: '2',
//         title: 'Portfolio Website',
//         description: 'A personal portfolio to showcase my work and skills.',
//         image: '/port.png',
//         tech: ['React', 'Firebase', 'Tailwind CSS'],
//       },
//     ],
//   },
//   {
//     id: 'backend',
//     title: 'Backend Developer',
//     icon: '⚙️',
//     projects: [
//       {
//         id: '3',
//         title: 'E-commerce',
//         description: 'A multi tenant based ecommerce backend.',
//         image: '/ecommerce.png',
//         tech: ['Node js', 'Express js', 'Redis', 'Postgresql', 'BullMQ', 'Microservice', 'Arif pay', 'MongoDB'],
//       },
//       {
//         id: '5',
//         title: 'Online Vacancy',
//         description: 'A vacancy system with dashboard. Where the company publish vacancy and applicant easly apply on open vacancy',
//         image: '/vacnay_1.png',
//         tech: ['Node js', 'Express js', 'Postgresql', 'Microservice', 'MongoDB'],
//       },
//     ],
//   },
//   {
//     id: 'uiux',
//     title: 'UI/UX Designer',
//     icon: '🎨',
//     projects: [
//       {
//         id: '4',
//         title: 'Mobile Banking App Redesign',
//         description: 'Redesigned the mobile banking app for a seamless and modern user experience.',
//         image: '/mb_kokeb.png',
//         tech: ['Figma', 'UX research', 'User Research'],
//       },
//     ],
//   },
// ];

// export default function ProjectsPage() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categorys, setCategories] = useState();
//   const [activeTab, setActiveTab] = useState(categorys ? categorys[0].id : 'fullstack');
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('projects')
//           .select('*')
//         // .eq('category', activeTab);
//         if (error) throw error;
//         setProjects(data);
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };
//     const fetchCategories = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('category')
//           .select('*');
//         if (error) throw error;
//         setCategories(data);
//         setActiveTab(data[0].id);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCategories();
//     fetchProjects();
//   }, []);


//   return (
//     <section className="min-h-[40vh] flex flex-col items-center justify-center pb-10 overflow-x-hidden">
//       <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Projects</h2>
//       <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl">
//         {categorys?.map((cat) => (
//           <button
//             key={cat.category}
//             onClick={() => setActiveTab(cat.category)}
//             className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === cat.id
//                 ? 'bg-[var(--color-primary)] text-[var(--color-secondary)] shadow-lg scale-105'
//                 : 'bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-background-2)] hover:scale-105'
//               }`}
//           >
//             {/* <span>{cat.icon}</span> */}
//             <span>As a {cat.title}</span>
//           </button>
//         ))}
//       </div>

//       <div className="w-full max-w-4xl">
//         {projects.length > 0 && projects.map((cat) => (
//           <div
//             key={cat.id}
//             className={`flex flex-col gap-8 transition-all duration-500 ${activeTab === cat.category ? 'opacity-100' : 'hidden opacity-0'
//               }`}>
//             {projects.map((project) => (
//               <div key={project.id} className="bg-gradient-to-br from-[var(--color-background-2)] rounded overflow-hidden flex flex-col md:flex-row items-stretch border-gray-400 ">
//                 <div className="md:w-48 w-full h-40 md:h-auto flex-shrink-0">
//                   <img src={project.image} alt={project.title} className="w-full h-25 object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl" />
//                 </div>
//                 <div className="flex-1 flex flex-col justify-between md:ml-4 ml-0 border-[var(--color-tertiary)] border p-4 min-w-0">
//                   <div className="flex flex-col gap-2">
//                     <h4 className="text-2xl font-bold text-[var(--color-primary)]">{project.title}</h4>
//                     <p className="text-base text-gray-500 mb-2 min-h-[3.5rem] line-clamp-3 overflow-hidden">{project.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {/* {project.tech.map((tech) => (
//                         <span key={tech} className="px-3 py-1 rounded-full bg-[var(--color-botton)] text-white text-xs font-medium shadow">{tech}</span>
//                       ))} */}
//                     </div>
//                   </div>
//                   {/* <div className="flex justify-end mt-2">
//                     <Link to={`/projects/${project.id}`} className="px-4 py-2 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors">View Details</Link>
//                   </div> */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// } 

import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase.from('category').select('*');
        if (error) throw error;
        setCategories(data);
        if (data.length > 0) {
          setActiveTab(data[0].title); // Set default to first category's title
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from('projects').select('*');
        if (error) throw error;
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center pb-10 overflow-x-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10 text-center">Projects</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.title)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === cat.title
                ? 'bg-[var(--color-primary)] text-[var(--color-secondary)] shadow-lg scale-105'
                : 'bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-background-2)] hover:scale-105'
              }`}
          >
            <span>As a {cat.title}</span>
          </button>
        ))}
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-8 transition-all duration-500">
        {!loading && filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="bg-gradient-to-br from-[var(--color-background-2)] rounded overflow-hidden flex flex-col md:flex-row items-stretch border-gray-400">
              <div className="md:w-48 w-full h-40 md:h-auto flex-shrink-0">
                <img src={project.image || '/placeholder.jpg'} alt={project.title} className="w-full h-25 object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl" />
              </div>
              <div className="flex-1 flex flex-col justify-between md:ml-4 ml-0 border-[var(--color-tertiary)] border p-4 min-w-0">
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-bold text-[var(--color-primary)]">{project.titles}</h4>
                  <p className="text-base text-gray-500 mb-2 min-h-[3.5rem] line-clamp-3 overflow-hidden">{project.description}</p>
                 
                <div className="flex flex-wrap gap-2">
                  {project.tech && Array.isArray(project.tech)
                    ? project.tech.map((tech, i) => (                     
                       <span key={i} 
                       className="px-3 py-1 rounded-full bg-[var(--color-botton)] text-white text-xs font-medium shadow">
                       {tech}
                       </span>
                    ))
                    : typeof project.tech === 'string'
                      ? project.tech.split(',').map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[var(--color-botton)] text-white text-xs font-medium shadow"
                        >
                          {tech.trim()}
                        </span>
                      ))
                      : null}
                    </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No projects found for this category.</p>
        )}
      </div>
    </section>
  );
}
