import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="main-title fadeIn">🚀 MERN Stack Web Development Online Course</h1>

      {/* MERN Stack Section */}
      <div className="card mern">
        <img
          src="https://raw.githubusercontent.com/Dafi-web/assignment/e14cf3bb8142c6ec0a3ab47d4275c2ab8d08b848/web.jpg"  // You can add your image URL here
          alt="MERN Stack Development"
          className="section-image zoomIn"
        />
        <h2 className="fadeInUp">Master the MERN Stack</h2>
        <p className="fadeInUp">
          Learn how to build full-fledged web applications using the MERN stack: MongoDB, Express, React, and Node.js. This course will teach you everything you need to know to become a full-stack developer.
        </p>
        <ul>
          <li>MongoDB: NoSQL Database</li>
          <li>Express: Web Framework for Node.js</li>
          <li>React: Frontend Library for Building UI</li>
          <li>Node.js: Backend JavaScript Runtime</li>
          <li>Building RESTful APIs and integrating MongoDB</li>
          <li>Authentication (JWT, OAuth)</li>
        </ul>
      </div>

      {/* Job Opportunities Section */}
      <div className="card opportunities fadeIn">
        <h2 className="fadeInUp">Global Job Opportunities</h2>
        <p>
          With the growing demand for MERN stack developers, you'll have access to top job opportunities globally. Whether you’re interested in working with tech giants or startups, MERN stack development skills are highly sought after in the job market.
        </p>
        <ul>
          <li>Competitive Salaries</li>
          <li>Roles: Full Stack Developer, Frontend Developer, Backend Developer</li>
          <li>Top Industries: Tech, E-commerce, Startups, Fintech</li>
          <li>Global Reach: Work from anywhere in the world</li>
        </ul>
      </div>

      {/* Possible Jobs After Completion */}
      <div className="card jobs-after-completion fadeIn">
        <h2 className="fadeInUp">Possible Jobs After Completion</h2>
        <p>
          Upon completion of the MERN stack course, you will be qualified to apply for various roles in the tech industry. Some of the job opportunities available include:
        </p>
        <ul>
          <li>Full Stack Developer</li>
          <li>Frontend Developer (React.js Specialist)</li>
          <li>Backend Developer (Node.js, Express.js Specialist)</li>
          <li>Web Application Developer</li>
          <li>API Developer (RESTful API)</li>
          <li>Software Engineer</li>
          <li>Freelancer or Contract Developer</li>
        </ul>
        <p>These roles are in high demand across multiple industries including technology, finance, healthcare, and e-commerce.</p>
      </div>

      {/* Class Timings Section */}
      <div className="card classes fadeIn">
        <h2 className="fadeInUp">Class Timings</h2>
        <p>
          Our MERN Stack classes will start on May 20, 2025. The course duration is 4 months, with classes following a structured schedule that accommodates students globally. Get ready to start your journey to becoming a full-stack developer!
        </p>
        <ul>
          <li>Classes Begin: May 20, 2025</li>
          <li>Duration: 4 months (May - August 2025)</li>
          <li>Time Zones: Flexible schedules to suit students across different time zones</li>
        </ul>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScNtJ9R70O-mvo3jvhrbanG21Eyi1-4gvWlDmrsLh35I2Y7rQ/viewform?usp=dialog" className="apply-button zoomIn">Apply Here</a>
      </div>
    </div>
  );
}

export default Home;
