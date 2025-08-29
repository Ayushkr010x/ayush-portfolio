import React from "react";

function Contact() {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] p-10 text-center">
      <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Get In Touch</h2>
      <p className="text-lg text-gray-200 mb-6">
        Whether you have an opportunity, a question, or just want to connect — drop me a message!
      </p>
      
      <div className="max-w-md mx-auto">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-[#FFD700] text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

