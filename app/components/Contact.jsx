"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast("Message sent Successfully", {
            style: { backgroundColor: "#22c55e", color: "#fff" },
          });
          form.current.reset();
        },
        (error) => {
          alert("Error sending Message " + error.text);
        }
      );
  };

  return (
    <div
      className="contact d-flex align-center justify-center flex-column"
      id="contact"
    >
      <h1>Contact Me</h1>
      <div className="content d-flex">
        <div className="contact-left d-flex flex-column gap-3">
          <span>
            <strong>Email:</strong> marve23lous@gmail.com
          </span>
          <span>
            <strong>Phone Number:</strong> 08145038125
          </span>
          <span>
            <strong>Location:</strong> Ikorodu, Lagos State, Nigeria
          </span>
        </div>
        <form
          className="d-flex flex-column gap-4"
          onSubmit={sendEmail}
          ref={form}
        >
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea
            type="text"
            rows="8"
            placeholder="Your Message"
            name="message"
            required
          />

          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}
