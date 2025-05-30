"use client";

import { useState, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with actual submission logic
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return submitted ? (
    <p className="text-lg text-green-600 mt-6">
      Thank you for reaching out! We&apos;ll get back to you soon.
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-amber-400 text-emerald-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-amber-300 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
