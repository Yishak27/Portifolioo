
import { Flex, Text, Button, Theme, ThickDividerHorizontalIcon } from "@radix-ui/themes";
import NavBar from "./components/page/NavBar";
import { HomePage } from "./components/page/HomePage";
import { Divider } from "@mui/material";
import { FooterPage } from "./components/page/FooterPage";
// const { theme, toogleTheme } = useTheme();

export default function App() {
  return (
    <>
      <NavBar />
      <Divider />
      <HomePage />
      <FooterPage />
    </>
  );
}

