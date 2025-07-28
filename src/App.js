
import { Separator } from "@radix-ui/themes";
import NavBar from "./components/page/NavBar";
import { HomePage } from "./components/page/HomePage";
import { Divider } from "@mui/material";
import { FooterPage } from "./components/page/FooterPage";
import SkillsPage from "./components/page/SkillsPage";
import ContactPage from "./components/page/ContactPage";
import { useEffect, useState } from 'react';
import { lazy } from "react";

const ProjectsPage = lazy(() => import("./components/page/ProjectsPage"));
const ExperiencePage = lazy(() => import("./components/page/ExperiencePage"));

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <div onContextMenu={(e) => e.preventDefault()} className="App">
        <h1 className="visually-hidden hidden">Ermiyas Damte Haile - Software Engineer Portfolio</h1>
        <NavBar />
        <Divider />
        <HomePage />
        <ExperiencePage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
        {showTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg bg-[var(--color-botton)] transition-colors"
            aria-label="Back to top"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6" /></svg>
          </button>
        )}
        <Separator style={{ width: "100%" }} mt={{ lg: "3", md: "2", sm: "2", xs: "2", xl: "4" }} />
        <FooterPage />
      </div>  
  );
}

