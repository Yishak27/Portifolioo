
import { Flex, Text, Button, Theme, ThickDividerHorizontalIcon } from "@radix-ui/themes";
import NavBar from "./components/page/NavBar";
import { HomePage } from "./components/page/HomePage";
import { Divider } from "@mui/material";
import { FooterPage } from "./components/page/FooterPage";
import { Route, Router, Routes } from "react-router-dom";
import { ResumePage } from "./components/page/ResumePage";
import { ScrollAreaDemo } from "./components/page/ScrollAreaDemo";
// const { theme, toogleTheme } = useTheme();

export default function App() {
  return (
    <>
      <NavBar />
      <Divider />
      <HomePage />
      <FooterPage />
      {/* <ScrollAreaDemo/> */}
      </>
  );
}

