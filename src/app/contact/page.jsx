import Image from "next/image";

export const metadata = {
  title: "Contact | BlogWeb",
  description: "Get in touch with the BlogWeb team — we’d love to hear from you.",
};

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center px-6 py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-24 text-center">
        Let's Keep in Touch
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl">
        <div className="relative w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-[500px]">
          <Image
            src="/contact.png"
            alt="Contact illustration"
            fill
            className="object-contain animate-move"
          />
        </div>

        <form className="flex flex-col gap-6 w-full md:w-1/2 bg-opacity-40 backdrop-blur-md rounded-2xl p-8 border border-gray-300 dark:border-gray-700 shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 bg-transparent border-2 border-gray-400 dark:border-gray-600 text-lg font-medium rounded-lg focus:outline-none focus:border-teal-500 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-4 bg-transparent border-2 border-gray-400 dark:border-gray-600 text-lg font-medium rounded-lg focus:outline-none focus:border-teal-500 transition"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="p-4 bg-transparent border-2 border-gray-400 dark:border-gray-600 text-lg font-medium rounded-lg focus:outline-none focus:border-teal-500 transition resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="inline-block w-full md:w-auto px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
