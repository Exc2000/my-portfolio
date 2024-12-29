import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMedia: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col gap-6 mt-10"
  >
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-blue-500 hover:text-blue-700 md:text-xl text-base"
    >
      <FaLinkedin /> : <p>Ali Babagana Musa</p>
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-blue-400 hover:text-blue-600 md:text-xl text-base"
    >
      <FaTwitter /> : <p>AliBabaganaMusa</p>
    </a>
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-400 hover:text-gray-600 md:text-xl text-base"
    >
      <FaGithub /> : <p>Exc2000</p>
    </a>
  </motion.div>
);

const ContactForm: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center"
    id="contact"
  >
    <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
    <form className="w-full max-w-lg">
      <div className="mb-4">
        <input
          className="w-full px-4 py-2 text-black border rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-4 py-2 text-black border rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full px-4 py-2 text-black border rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
          id="message"
          name="message"
          rows={5}
          placeholder="Type your message"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
      >
        Send Message
      </button>
    </form>
  </motion.div>
);

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white md:h-[650px] py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 lg:px-20"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          # Contact Me
        </h2>
        <p className="mb-12 text-xl text-center text-gray-400">
          Whether you have an innovative idea or need professional advice, I’m
          here to help. Let’s connect and create something remarkable together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 md:space-x-12">
          <div className="md:order-1 order-2 space-y-8">
            <SocialMedia />
          </div>
          <div className="md:order-2 order-1">
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
