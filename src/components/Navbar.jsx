import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">

            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    DevPortfolio
                </h1>

                <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">

                    <li>
                        <a href="#about" className="hover:text-black dark:hover:text-white">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-black dark:hover:text-white">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-black dark:hover:text-white">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-black dark:hover:text-white">
                            Contact
                        </a>
                    </li>

                </ul>
                <ThemeToggle />
                <button
                    className="md:hidden text-gray-900 dark:text-white"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

            </div>

            {open && (

                <div className="md:hidden px-6 pb-4">

                    <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">

                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>

                </div>

            )}

        </nav>
    )
}