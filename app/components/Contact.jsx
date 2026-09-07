"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      toast("Message sent Successfully", {
        style: { backgroundColor: "var(--blue)", color: "var(--paper)" },
      });
      form.current.reset();
    } catch (error) {
      alert("Error sending Message " + error.text);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div
        className="w-full d-flex align-center justify-center flex-column"
        data-aos="zoom-in"
      >
        <div className="contact-heading">
          <span className="section-kicker">04 / CONTACT</span>
          <h1>Contact Me</h1>
        </div>
        <div className="content">
          <div className="contact-left d-flex flex-column gap-3">
            <span>
              <strong>Email:</strong> marvellousolorunwa23@gmail.com
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
            <label>
              <span>Your Name</span>
              <input type="text" placeholder="Your Name" name="name" required />
            </label>
            <label>
              <span>Your Email</span>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
            </label>
            <label>
              <span>Your Message</span>
              <textarea
                type="text"
                rows="8"
                placeholder="Your Message"
                name="message"
                required
              />
            </label>

            <button type="submit" disabled={isSending} aria-busy={isSending}>
              {isSending && (
                <span className="loading-spinner" aria-hidden="true" />
              )}
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
