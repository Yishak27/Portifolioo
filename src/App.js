
import { Flex, Text, Button, Theme, ThickDividerHorizontalIcon, Separator } from "@radix-ui/themes";
import NavBar from "./components/page/NavBar";
import { HomePage } from "./components/page/HomePage";
import { Divider } from "@mui/material";
import { FooterPage } from "./components/page/FooterPage";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./components/page/ProjectsPage";
import ProjectDetailPage from "./components/page/ProjectDetailPage";
import ExperiencePage from "./components/page/ExperiencePage";
import SkillsPage from "./components/page/SkillsPage";

export default function App() {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="App">
      <NavBar />
      <Divider />
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <ExperiencePage />
            <SkillsPage />
            <ProjectsPage />
          </>
        } />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
      <Separator style={{ width: "100%" }} mt={{ lg: "3", md: "2", sm: "2", xs: "2", xl: "4" }} />
      <FooterPage />
    </div>
  );
}

