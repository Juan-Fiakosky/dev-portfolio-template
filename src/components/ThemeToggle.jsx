import { useEffect, useState } from "react"

function ThemeToggle() {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (

        <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition"
        >

            <span
                className={`absolute left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition ${darkMode ? "translate-x-7" : ""}`}
            />

        </button>

    )
}

export default ThemeToggle