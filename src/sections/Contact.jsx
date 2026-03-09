export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">

            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Contact
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-10">
                Feel free to reach out if you'd like to work together.
            </p>

            <form action="https://formspree.io/f/xxxx" method="POST" className="flex flex-col gap-4">

                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                />

                <textarea
                    placeholder="Message"
                    rows="4"
                    className="p-3 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                />

                <button className="bg-blue-600 text-white hover:bg-blue-700 transition p-3 rounded-lg">
                    Send Message
                </button>

            </form>

        </section>
    )
}