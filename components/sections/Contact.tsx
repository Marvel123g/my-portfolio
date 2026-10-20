"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import toast from "react-hot-toast";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiCopy,
  FiCheck,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaWhatsapp, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormValues = z.infer<typeof schema>;

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Marvel123g",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/marvellous-olorunwa-16aa72362",
    icon: FaLinkedin,
  },
];

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [lagosTime, setLagosTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setLagosTime(
        new Intl.DateTimeFormat("en-NG", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          weekday: "short",
        }).format(new Date()),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      await emailjs.send(serviceId, templateId, data, publicKey);
      toast.success("Message delivered! I'll reply within 24 hours.", {
        style: {
          background: "var(--canvas-card)",
          color: "var(--ink)",
          border: "1px solid var(--secondary-border)",
          fontFamily: "var(--font-space)",
          fontSize: "0.8rem",
        },
      });
      reset();
    } catch {
      toast.error("Couldn't send message — please try email directly.", {
        style: {
          background: "var(--canvas-card)",
          color: "var(--ink)",
          border: "1px solid var(--danger-border)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
        },
      });
    }
  };

  const copy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
    toast.success(`${type === "email" ? "Email" : "Phone"} copied!`, {
      style: {
        background: "var(--canvas-card)",
        color: "var(--ink)",
        border: "1px solid var(--secondary-border)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
      },
    });
  };

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl border bg-canvas-mid font-outfit text-sm text-ink placeholder:text-ink-dim",
    "transition-all duration-200 outline-none",
    "focus:border-accent/40 focus:bg-canvas-card",
    "border-canvas-border",
  );

  const errorClass =
    "mt-1.5 font-mono font-medium text-[10px] text-danger tracking-wider";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 md:py-40 border-t border-canvas-border bg-surface-blue"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <Reveal className="mb-16">
          <SectionLabel number="05" label="Contact" />
          <h2
            id="contact-heading"
            className="font-sans font-medium tracking-wide text-5xl sm:text-6xl text-ink mt-3 max-w-2xl"
          >
            Let&apos;s build something{" "}
            <span className="italic text-secondary">exceptional</span> together.
          </h2>
          <p className="mt-4 text-ink-muted max-w-lg font-space leading-relaxed">
            Frontend role, client project, or engineering collaboration — my
            inbox is open. I respond within 24 hours.
          </p>
        </Reveal>

        <div className="grid max-[332px]:items-center justify-center md:grid-cols-[380px,1fr] gap-10 w-full">
          {/* Left: Info column */}
          <Reveal className="flex flex-col gap-6">
            {/* Status card */}
            <div className="p-5 rounded-xl border border-secondary-border bg-secondary-muted">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-secondary">
                  Immediate Availability
                </span>
              </div>
              <p className="text-ink-muted text-sm font-outfit leading-relaxed">
                Open to full-time roles, contract work, and freelance projects.
                Remote-first, global opportunities welcome.
              </p>
              {lagosTime && (
                <p className="mt-3 font-space text-[12px] font-medium text-ink-dim">
                  Lagos time · {lagosTime}
                </p>
              )}
            </div>

            {/* Contact methods */}
            <div className="flex flex-col gap-0">
              {/* Email */}
              <div className="flex items-center gap-4 py-4 border-b border-canvas-border">
                <div className="w-9 h-9 rounded-full border border-canvas-border flex items-center justify-center text-ink-dim shrink-0">
                  <FiMail size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono font-bold text-[10px] text-ink-dim tracking-[0.12em] uppercase mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:marvellousolorunwa23@gmail.com"
                    className="font-mono text-xs text-ink-muted hover:text-ink transition-colors duration-200 truncate block"
                  >
                    marvellousolorunwa23@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    copy("marvellousolorunwa23@gmail.com", "email")
                  }
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-canvas-border text-ink-dim hover:text-accent hover:border-accent/30 transition-all duration-200"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <FiCheck size={13} className="text-accent" />
                  ) : (
                    <FiCopy size={13} />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 py-4 border-b border-canvas-border">
                <div className="w-9 h-9 rounded-full border border-canvas-border flex items-center justify-center text-ink-dim shrink-0">
                  <FiPhone size={15} />
                </div>
                <div className="flex-1">
                  <p className="font-mono font-bold text-[10px] text-ink-dim tracking-[0.12em] uppercase mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+2348145038125"
                    className="font-mono text-xs text-ink-muted hover:text-ink transition-colors duration-200"
                  >
                    +234 814 503 8125
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copy("08145038125", "phone")}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-canvas-border text-ink-dim hover:text-accent hover:border-accent/30 transition-all duration-200"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <FiCheck size={13} className="text-accent" />
                  ) : (
                    <FiCopy size={13} />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 py-4 border-b border-canvas-border">
                <div className="w-9 h-9 rounded-full border border-canvas-border flex items-center justify-center text-ink-dim shrink-0">
                  <FiMapPin size={15} />
                </div>
                <div>
                  <p className="font-mono font-bold text-[10px] text-ink-dim tracking-[0.12em] uppercase mb-0.5">
                    Location
                  </p>
                  <span className="font-mono text-xs text-ink-muted">
                    Ikorodu, Lagos State, Nigeria
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348145038125?text=Hi%20Marvelous%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4 border-b border-canvas-border hover:text-accent transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-full border border-canvas-border flex items-center justify-center text-ink-dim group-hover:text-accent group-hover:border-accent/60 transition-all duration-200 shrink-0">
                  <FaWhatsapp size={15} />
                </div>
                <div className="flex-1">
                  <p className="font-mono font-bold text-[10px] text-ink-dim tracking-[0.12em] uppercase mb-0.5 group-hover:text-accent">
                    WhatsApp
                  </p>
                  <span className="font-mono text-xs text-ink-muted group-hover:text-accent transition-colors duration-200">
                    Fastest response time
                  </span>
                </div>
                <FiArrowUpRight
                  size={13}
                  className="text-ink-dim group-hover:text-accent transition-colors duration-200"
                />
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label} profile`}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-canvas-border text-ink-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right: Contact form */}
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-5 p-8 rounded-2xl border border-canvas-border bg-canvas-card"
              aria-label="Contact form"
            >
              <h3 className="font-space text-2xl text-ink">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-space font-medium text-[10px] tracking-[0.12em] uppercase text-ink-dim mb-2"
                  >
                    Your Name{" "}
                    <span className="text-accent" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Alex Morgan"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                    className={inputClass}
                  />
                  {errors.name && (
                    <p id="name-error" className={errorClass} role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-space font-medium text-[10px] tracking-[0.12em] uppercase text-ink-dim mb-2"
                  >
                    Email Address{" "}
                    <span className="text-accent" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p id="email-error" className={errorClass} role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-space font-medium text-[10px] tracking-[0.12em] uppercase text-ink-dim mb-2"
                >
                  Subject{" "}
                  <span className="text-accent" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Frontend role / Collaboration / Project"
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  {...register("subject")}
                  className={inputClass}
                />
                {errors.subject && (
                  <p id="subject-error" className={errorClass} role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-space font-medium text-[10px] tracking-[0.12em] uppercase text-ink-dim mb-2"
                >
                  Message{" "}
                  <span className="text-accent" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about the project, role, timeline, or objectives..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  {...register("message")}
                  className={cn(inputClass, "resize-y min-h-[140px]")}
                />
                {errors.message && (
                  <p id="message-error" className={errorClass} role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-canvas font-mono text-xs tracking-[0.12em] uppercase font-medium",
                  "transition-all duration-200",
                  isSubmitting
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-accent-dim",
                )}
                aria-live="polite"
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-3.5 h-3.5 border-2 border-canvas/30 border-t-canvas rounded-full"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend size={13} aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
