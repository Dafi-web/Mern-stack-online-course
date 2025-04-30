import React from 'react';
import './aboutus.css';

function AboutUs() {
  return (
    <div id="about" className="about-container">
      <img src='https://github.com/Dafi-web/assignment/blob/main/WhatsApp%20Image%202025-03-29%20at%2015.15.31%20(2).jpeg?raw=true' alt="MERN Academy Logo" className="about-logo" />

      <h2 className="about-title fadeIn">About Us</h2>

      <p className="about-description fadeInUp">
        At <strong>MERN Academy</strong>, our mission is to empower the next generation of developers by delivering real-world, job-focused training. We specialize in the <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>—a modern and in-demand technology suite powering top tech companies around the world.
      </p>

      <p className="about-description fadeInUp">
        We believe learning should be immersive, practical, and flexible. That's why our courses blend live online sessions with hands-on projects, code reviews, and one-on-one mentorship. Whether you're a complete beginner or someone looking to upskill, our program adapts to your level and goals.
      </p>

      <p className="about-description fadeInUp">
        Courses are available in three languages: <strong>Amharic</strong>, <strong>Tigrigna</strong>, and <strong>English</strong>, so you can learn in the language you're most comfortable with.
      </p>

      <p className="about-description fadeInUp">
        Students are not just learners—they’re part of our community. We host virtual hangouts, peer coding sessions, hackathons, and offer dedicated career support, including resume reviews, interview coaching, and job placement help.
      </p>

      <p className="about-description fadeInUp">
        Our instructors are industry professionals with a passion for teaching. We keep things real by simulating tech team environments, agile workflows, and Git-based collaboration. Expect more than just lessons—expect a launchpad for your future.
      </p>

      {/* 🎯 Add the attractive image here */}
      <img
        src="https://raw.githubusercontent.com/Dafi-web/assets2/5ad22458f1baf216601eef41ec9c41a5cf8eb0b4/web%20image.jpg"
        alt="Inspiring Tech Visual"
        className="about-attract-image fadeInUp"
      />

      <p className="about-description fadeInUp">
        Join us and start building your future in tech with confidence, skills, and support. 🚀
      </p>

      <p className="about-description fadeInUp">
        💻 Check out my work on{' '}
        <a href="https://github.com/Dafi-web" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
    </div>
  );
}

export default AboutUs;
