
import { Flex, Text, Button, Theme, ThickDividerHorizontalIcon, Separator } from "@radix-ui/themes";
import NavBar from "./components/page/NavBar";
import { HomePage } from "./components/page/HomePage";
import { Divider } from "@mui/material";
import { FooterPage } from "./components/page/FooterPage";
import { Route, Router, Routes } from "react-router-dom";
import { ResumePage } from "./components/page/ResumePage";
import { ScrollAreaDemo } from "./components/page/ScrollAreaDemo";

export default function App() {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="App">
      <NavBar />
      <Divider />
      <HomePage />
      <Separator style={{ width: "100%" }} mt={{ lg: "3", md: "2", sm:"2", xs:"2", xl:"4" }} />
      <FooterPage />
      {/* <ScrollAreaDemo/> */}
    </div>
  );
}

