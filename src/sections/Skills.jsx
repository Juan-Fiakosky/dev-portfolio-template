import { FaReact, FaJava, FaDocker, FaAws, FaGitAlt } from "react-icons/fa"
import { SiSpringboot, SiPostgresql, SiTailwindcss } from "react-icons/si"
import { motion } from "framer-motion"

export default function Skills() {

    const skills = [
        { icon: <FaReact />, name: "React" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <FaGitAlt />, name: "Git" },
    ]

    return (
        <section id="skills" className="py-24 px-6 max-w-6xl mx-auto text-center">

            <h2 className="text-3xl font-bold mb-14 text-gray-900 dark:text-white">
                Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:shadow-xl transition"
                    >

                        <div className="text-4xl text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                            {skill.icon}
                        </div>

                        <p className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                        </p>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}