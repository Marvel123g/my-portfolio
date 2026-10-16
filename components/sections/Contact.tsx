"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiSend, FiArrowUpRight } from "react-icons/fi";
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
    href: "https://github.com/Marvelous-Dev",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/olorunwa-marvelous",
    icon: FaLinkedin,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/marvelousdev",
    icon: FaXTwitter,
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
      const res = await fetch("https://formspree.io/f/xbljedov", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message delivered! I'll reply within 24 hours.", {
          style: {
            background: "#131619",
            color: "#f0f0ef",
            border: "1px solid rgba(200,240,78,0.3)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
          },
        });
        reset();
      } else {
        throw new Error("Server error");
      }
    } catch {
      toast.error("Couldn't send message — please try email directly.", {
        style: {
          background: "#131619",
          color: "#f0f0ef",
          border: "1px solid rgba(239,68,68,0.3)",
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
        background: "#131619",
        color: "#f0f0ef",
        border: "1px solid rgba(200,240,78,0.3)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
      },
    });
  };

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl border bg-canvas-mid font-mono text-sm text-ink placeholder:text-ink-dim",
    "transition-all duration-200 outline-none",
    "focus:border-accent/40 focus:bg-canvas-card",
    "border-canvas-border",
  );

  const errorClass = "mt-1.5 font-mono text-[10px] text-red-400 tracking-[0.08em]";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 md:py-40 border-t border-canvas-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <Reveal className="mb-16">
          <SectionLabel number="05" label="Contact" />
          <h2
            id="contact-heading"
            className="font-display text-display-xl text-ink mt-3 max-w-2xl"
          >
            Let&apos;s build something{" "}
            <span className="italic text-accent">exceptional</span> together.
          </h2>
          <p className="mt-4 text-ink-muted max-w-lg leading-relaxed">
            Frontend role, client project, or engineering collaboration — my inbox is open. I
            respond within 24 hours.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[380px,1fr] gap-10">
          {/* Left: Info column */}
          <Reveal className="flex flex-col gap-6">
            {/* Status card */}
            <div className="p-5 rounded-xl border border-accent/20 bg-accent-muted">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">
                  Immediate Availability
                </span>
              </div>
              <p className="text-ink-muted text-sm leading-relaxed">
                Open to full-time roles, contract work, and freelance projects. Remote-first, global
                opportunities welcome.
              </p>
              {lagosTime && (
                <p className="mt-3 font-mono text-[10px] text-ink-dim">
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
                  <p className="font-mono text-[10px] text-ink-dim tracking-[0.12em] uppercase mb-0.5">
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
                  onClick={() => copy("marvellousolorunwa23@gmail.com", "email")}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-canvas-border text-ink-dim hover:text-accent hover:border-accent/30 transition-all duration-200"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <FiCheck size={13} className="text-accent" /> : <FiCopy size={13} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 py-4 border-b border-canvas-border">
                <div className="w-9 h-9 rounded-full border border-canvas-border flex items-center justify-center text-ink-dim shrink-0">
                  <FiPhone size={15} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[10px] text-ink-dim tracking-[0.12em] uppercase mb-0.5">
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
                  {copiedPhone ? <FiCheck size={13} className="text-accent" /> : <FiCopy size={13} />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 py-4 border-b border-canvas-border">
                <div className="w-9 h-9 rounded-full border border-canvas-border flex items-center justify-center text-ink-dim shrink-0">
                  <FiMapPin size={15} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-ink-dim tracking-[0.12em] uppercase mb-0.5">
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
                className="group flex items-center gap-4 py-4 border-b border-canvas-border hover:text-green-400 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-full border border-canvas-border flex items-center justify-center text-ink-dim group-hover:text-green-400 group-hover:border-green-400/30 transition-all duration-200 shrink-0">
                  <FaWhatsapp size={15} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[10px] text-ink-dim tracking-[0.12em] uppercase mb-0.5 group-hover:text-green-400">
                    WhatsApp
                  </p>
                  <span className="font-mono text-xs text-ink-muted group-hover:text-green-300 transition-colors duration-200">
                    Fastest response time
                  </span>
                </div>
                <FiArrowUpRight size={13} className="text-ink-dim group-hover:text-green-400 transition-colors duration-200" />
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
              <h3 className="font-display text-2xl text-ink">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] tracking-[0.12em] uppercase text-ink-dim mb-2">
                    Your Name <span className="text-accent" aria-hidden="true">*</span>
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
                  <label htmlFor="email" className="block font-mono text-[10px] tracking-[0.12em] uppercase text-ink-dim mb-2">
                    Email Address <span className="text-accent" aria-hidden="true">*</span>
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
                <label htmlFor="subject" className="block font-mono text-[10px] tracking-[0.12em] uppercase text-ink-dim mb-2">
                  Subject <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Frontend role / Collaboration / Project"
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
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
                <label htmlFor="message" className="block font-mono text-[10px] tracking-[0.12em] uppercase text-ink-dim mb-2">
                  Message <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about the project, role, timeline, or objectives..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
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
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
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

