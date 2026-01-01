import React from "react";

export default function Resume() {
  return (
    <div
      className="resume d-flex align-center justify-center flex-column"
      id="resume"
    >
      <h1>Resume</h1>
      <section className="d-flex">
        <div className="resume-left">
          <h3>Projects</h3>
          <div className="projects">
            <div className="project-item d-flex gap-1">
              <div className="circle"></div>
              <div className="description">
                <h4>Budget Tracker</h4>
                <p>
                  The Budget Tracker is a web based application I built to help
                  track income and expenses in a simple and organized way. It
                  allows user to add transactions, view, delete and edit
                  transaction, change currency. The project focuses on improving
                  personal finance management through a clean and user-friendly
                  interface.
                </p>
              </div>
            </div>
            <div className="project-item d-flex gap-1">
              <div className="circle"></div>
              <div className="description">
                <h4>Job Search(Collaborative Project - Work in Progress)</h4>
                <p>
                  This platform connects job seekers with employers through a
                  simple and interactive web system. It features two main pages:
                  an admin page where jobs are posted, deleted, edited and
                  application histories are viewed, and user page where
                  applicants can view available jobs and apply.This project was
                  built with a backend developer who handled the server-side
                  logic and database.
                </p>
              </div>
            </div>
            <div className="project-item d-flex gap-1">
              <div className="circle"></div>
              <div className="description">
                <h4>Bible Study Question & Answer Platform</h4>
                <p>
                  The Bible study website is an interactive platform where user
                  can submit Bible-related questions. These questions are
                  displayed on both the user and admin pages. The admin can
                  answer, delete submitted question, and the answers along side
                  the questions are then shown to both admin and user. This
                  system encourages learning and interaction through structured
                  question-and-answer discussions.
                </p>
              </div>
            </div>
            <div className="project-item d-flex gap-1">
              <div className="circle"></div>
              <div className="description">
                <h4>Portfolio Website</h4>
                <p>
                  A personal website created to showcase my projects, skills as
                  a frontend developer. It contains sections such as About,
                  Projects, Skills and Contact. The website is fully responsive
                  and designed to present a professional online presence.
                </p>
              </div>
            </div>
            <div className="project-item d-flex gap-1">
              <div className="circle"></div>
              <div className="description">
                <h4>Frontend Mentor - Product List with Cart Challenge</h4>
                <p>
                  A responsive frontend chanllenge project where I built a
                  product listing interface with a fully functional shopping
                  cart following the official Frontend Mentor design. Users can
                  add/ remove items, adjust quantities, and view real-time
                  totals. This project includes an order confirmation modal and
                  adapts to multiple screen sizes
                </p>
              </div>
            </div>
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
            <h4>WASSCE(West African Senior School Certificate Examination)</h4>
            <p>D'solid Crystal Academy</p>
            <p>2016-2022</p>
          </div>
        </div>
      </section>
    </div>
  );
}
