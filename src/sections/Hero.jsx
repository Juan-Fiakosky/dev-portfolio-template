import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero() {
    return (

        <section className="text-center py-32 px-6">

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
                John Developer
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 dark:text-gray-400 mb-8"
            >
                Full Stack Developer specialized in modern web applications
            </motion.p>
            {/* botones */}
            <div className="flex flex-col items-center gap-6">
                <div className="flex gap-4">
                    <a
                        href="#projects"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        View Projects
                    </a>

                    <a
                        href="/sample-cv.pdf"
                        download
                        className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        Download CV
                    </a>
                </div>

                <div className="flex gap-6 text-2xl">

                    <a
                        href="https://github.com/TU_GITHUB"
                        target="_blank"
                        className="hover:text-blue-500 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/TU_LINKEDIN"
                        target="_blank"
                        className="hover:text-blue-500 transition"
                    >
                        <FaLinkedin />
                    </a>

                </div>

            </div>

        </section>

    )
}