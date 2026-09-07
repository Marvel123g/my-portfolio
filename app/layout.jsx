import { DM_Mono, Space_Grotesk } from "next/font/google";

// import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "../scss/main.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Stacks from "./components/Stacks";
import "aos/dist/aos.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Olorunwa Marvelous — Frontend Developer",
  description:
    "Portfolio of Olorunwa Marvelous, a frontend developer creating thoughtful, responsive, and engaging web experiences.",
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   AOS.init({
  //     repeat: true,
  //     duration: 2000
  //   })
  // }, [])

  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
        <Toaster />
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
