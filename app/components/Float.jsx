"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import { BsChevronDoubleUp } from "react-icons/bs";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-contact">
      {/* OPTIONS */}
      <div className={`actions ${open ? "show" : ""}`}>
        <a
           href="https://wa.me/2348145038125?text=Hey!%20I%20checked%20out%20your%20portfolio%20and%20I%20really%20like%20your%20work.%20I'd%20love%20to%20collaborate%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp"
        >
          <FaWhatsapp />
        </a>

        <a href="mailto:marve23lous@gmail.com" className="icon gmail">
          <MdEmail />
        </a>

        <a href="tel:+2348145038125" className="icon phone">
          <FaPhoneAlt />
        </a>
      </div>

      {/* MAIN BUTTON */}

<button
  className={`main-btn ${open ? "rotate" : ""}`}
  onClick={() => setOpen(!open)}
>
  <BsChevronDoubleUp />
</button>
    </div>
  );
}