import React from "react";
import ContactForm from "../components/ContactForm";

const ContactUsPage = () => {
  return (
    <div className="bg-white text-emerald-900">
      <section className="text-white py-16 px-6 justify-center">
        <h1 className="text-4xl md:text-5xl text-emerald-900 font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-amber-500 md:text-2xl">We&apos;d love to hear from you!</p>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-amber-400 inline-block pb-1">
          Get in Touch
        </h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactUsPage;
