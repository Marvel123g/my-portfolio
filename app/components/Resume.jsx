"use client"
import React, { useState } from "react";

export default function Resume() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Budget Tracker",
      description:
        "The Budget Tracker is a web based application I built to help track income and expenses in a simple and organized way. It allows user to add transactions, view, delete and edit transaction, change currency. The project focuses on improving personal finance management through a clean and user-friendly interface.",
    },
    {
      title: "Genjo Teacher (Collaborative Project - Work in Progress)",
      description:
        "This platform is a learning application designed to help individuals from various background learn Igbo language with ease. This project is being built with a backend developer who is handling the server-side logic and database.",
    },
    {
      title: "Bible Study Question & Answer Platform",
      description:
        "The Bible study website is an interactive platform where user can submit Bible-related questions. These questions are displayed on both the user and admin pages. The admin can answer, delete submitted question, and the answers along side the questions are then shown to both admin and user. This system encourages learning and interaction through structured question-and-answer discussions.",
    },
    {
      title: "Health Shield AI (Collaborative)",
      description:
        "Health-Shield is a multi-platform health assistant application that leverages AI and machine learning to provide health-related services, including chat, symptom assessment, and predictions.This project was built with a backend developer who handled the server-side logic.",
    },
    {
      title: "Frontend Mentor - Product List with Cart Challenge",
      description:
        "A responsive frontend challenge project where I built a product listing interface with a fully functional shopping cart following the official Frontend Mentor design. Users can add/remove items, adjust quantities, and view real-time totals. This project includes an order confirmation modal and adapts to multiple screen sizes.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="resume" id="resume" >
      <h1>Resume</h1>
      <section className="resume-section" data-aos="fade-up">
        <div className="resume-left">
          <h3>Projects</h3>
          <div className="carousel-container">
            <button
              className="carousel-arrow prev"
              onClick={handlePrev}
              aria-label="Previous project"
            >
              ❮
            </button>
            <div className="carousel-content">
              <div className="project-item">
                <div className="circle"></div>
                <div className="description">
                  <h4>{currentProject.title}</h4>
                  <p>{currentProject.description}</p>
                </div>
              </div>
              <div className="carousel-indicators">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <button
              className="carousel-arrow next"
              onClick={handleNext}
              aria-label="Next project"
            >
              ❯
            </button>
          </div>
        </div>
        <div className="resume-right">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Bachelor's Degree in Computer Science</h4>
            <p>LASU (Lagos State University)</p>
            <p>2023 - Present</p>
          </div>
          <div className="education-item">
            <h4>WASSCE (West African Senior School Certificate Examination)</h4>
            <p>D'solid Crystal Academy</p>
            <p>2016-2022</p>
          </div>
        </div>
      </section>
    </div>
  );
}