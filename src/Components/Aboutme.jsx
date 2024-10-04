import React from 'react';
import './Aboutme.css';

const Aboutme = () => {
  return (
    <div>
      <main>
        {/* Add the image source URL here */}
     
        <p className="title">
          About <span> me</span>
        </p>

        <p className="intro">
          I'm Aman Kumar Chhari, a passionate and driven Computer Science Engineering student with a strong foundation in software development and a keen interest in AI and its applications.
        </p>

        <p className="first">
          With a solid academic background in Computer Science, I've developed a strong proficiency in programming languages such as C, JavaScript, and a range of frameworks including ReactJS, Node.js, and Express.js. My experience with databases, including MongoDB, has allowed me to build scalable and efficient applications.
        </p>

        <p>
          As a full-stack developer, I've worked on various projects, including AI-powered applications, web development, and mobile apps. My experience with the MERN stack and OpenAI API has given me a unique perspective on the potential of AI in software development.
        </p>

        <p>
          I'm excited to continue learning and growing as a developer, and I'm eager to contribute my skills and experience to innovative projects and teams. When I'm not coding, you can find me participating in hackathons, attending tech events, or exploring new technologies.
        </p>

        <p>
          Let's connect and build something amazing together!
        </p>
      </main>
    </div>
  );
};

export default Aboutme;