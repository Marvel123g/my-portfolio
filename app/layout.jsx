// import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "../scss/main.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Resume from "./components/Resume";

export const metadata = {
  title: "My Portfolio",
  description: "Created by marvelous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <NavBar />
        {children}
        <About />
        <Project />
        <Resume />
        <Contact />
      </body>
    </html>
  );
}
