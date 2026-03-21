"use client";
import React, { useRef, useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/16/solid";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cvgz0nr",
        "template_jflrlla",
        form.current!,
        "RfinUHcpAV-25yJvP",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message." + error.text);
          setLoading(false);
        },
      );
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-center md:flex-row justify-evenly mx-auto items-center max-w-7xl space-y-4 pt-16">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl font-semibold text-center">
          I have just what you need.
        </h4>
        <span className="underline">Let Us Talk</span>
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>+254717136695</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>dancanngugi79@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>Rainbow Resort Lane</p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              name="name"
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="contactInput"
              required
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#F7AB0A] py-4 px-10 text-black font-bold disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
