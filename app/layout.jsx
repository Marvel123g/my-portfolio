// import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "../scss/main.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Stacks from "./components/Stacks";
import "aos/dist/aos.css"
import FloatingContact from "./components/Float";

export const metadata = {
  title: "My Portfolio",
  description: "Created by marvelous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {/* <FloatingContact/> */}
        <NavBar />
        {children}
        <About />
        <Stacks/>
        <Project />
        <Resume />
        <Contact />
      </body>
    </html>
  );
}
