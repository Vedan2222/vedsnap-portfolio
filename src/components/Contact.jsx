import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nyxkgsj",      // ⬅️ Replace with your actual EmailJS Service ID
        "template_mbepm1n",     // ⬅️ Replace with your Template ID
        form.current,
        "DiY9vdxyvn79yHL6t"       // ⬅️ Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Let’s Work Together</h2>
          <p className="text-gray-400">
            Interested in working together? Fill out the form or reach out directly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500" />
              <span>vrdeshmukh103@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-500" />
              <span>Mahad, Maharashtra</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/deshmukh_vedant_/" target="_blank" rel="noreferrer">
              <Instagram className="text-white hover:text-orange-500 transition" />
            </a>
            <a href="https://github.com/Vedan2222" target="_blank" rel="noreferrer">
              <Github className="text-white hover:text-orange-500 transition" />
            </a>
            <a href="https://www.linkedin.com/in/vedant-deshmukh-39569122a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <Linkedin className="text-white hover:text-orange-500 transition" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-neutral-900 p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full bg-neutral-800 text-white p-3 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="w-full bg-neutral-800 text-white p-3 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="w-full bg-neutral-800 text-white p-3 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-white w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
