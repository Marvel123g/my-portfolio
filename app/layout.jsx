// import { Geist, Geist_Mono } from "next/font/google";
import "../scss/main.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Resume from "./components/Resume";

export const metadata = {
  title: "My Portfolio",
  description: "GCreated my marvelous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
