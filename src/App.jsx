import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import { useState, useEffect } from "react"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Footer from "./components/Footer"
import Contact from "./sections/Contact"

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])
  const projects = [
    {
      title: "Ecommerce Platform",
      description: "Full stack ecommerce built with React and Spring Boot.",
      tech: ["React", "Spring Boot", "MySQL"],
      image: "/projects/ecommerce.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Manager App",
      description: "Task management app with authentication and API.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/projects/task-manager.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Crypto Dashboard",
      description: "Dashboard showing crypto prices and analytics.",
      tech: ["React", "API", "Tailwind"],
      image: "/projects/crypto-dashboard.png",
      github: "#",
      demo: "#"
    }
  ]
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />

      <About />

      <Projects projects={projects} />

      <Skills />

      <Contact />

      <Footer
      />

    </div>
  )
}

export default App
