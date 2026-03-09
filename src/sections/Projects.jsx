import { motion } from "framer-motion"

export default function Projects({ projects }) {
    return (

        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
                Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                {projects.map((project, index) => (

                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg mb-4 w-full h-40 object-cover"
                        />

                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            {project.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">

                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>

                        <div className="flex gap-4">

                            <a
                                href={project.github}
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                GitHub
                            </a>

                            <a
                                href={project.demo}
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                Live Demo
                            </a>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>

    )
}