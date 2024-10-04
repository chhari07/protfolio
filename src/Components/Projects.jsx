import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div>
      <span class=" pro  ">MY PROJECTS</span>
      <section>
        <div className="container">
          <div className="carousel">
            {[...Array(6)].map((_, index) => (
              <input
                type="radio"
                name="slides"
                checked={activeSlide === index + 1}
                onChange={() => handleSlideChange(index + 1)}
                id={`slide-${index + 1}`}
                key={index}
              />
            ))}
            <ul className="carousel__slides">
              {[...Array(6)].map((_, index) => (
                <li key={index} className={`carousel__slide ${activeSlide === index + 1 ? 'active' : ''}`}>
                  <figure>
                    <div>
                      {index === 0 && <img src=" https://htmlburger.com/blog/wp-content/uploads/2024/03/fitness-websites-inspiration.jpg  " alt="ALL FIT Screenshot" class="allfit-image" />}
                      {index === 1 && <img src=" https://images04.nicepage.com/feature/461183/website-blog.jpg" alt="Blog React App" />}
                      {index === 2 && <img src="https://verloop.io/wp-content/uploads/7-features-that-make-a-good-website-chatbot-great-08-1200x600.jpg " alt="ChatBot" />}
                      {index === 3 && <img src="https://www.radiustheme.com/wp-content/uploads/2021/10/Ranna.png  " alt="Recipe App" />}
                      {index === 4 && <img src=" https://cdn.dribbble.com/userupload/14096027/file/original-b0702a8c87d32281141472fb505f1c6a.png?resize=752x  " alt="IMAGINERA" />}
                      {index === 5 && <img src=" https://www.gconnect.in/gc22/wp-content/uploads/2024/09/imd-weather-forecast.jpg " alt="Weather API Site" />}
                    </div>
                    <figcaption>
                      {index === 0 && <span>ALL-FIT: A fitness-related project incorporating Indian culture and traditional health systems.</span>}
                      {index === 1 && <span>Blog React App: A React application for creating, managing, and displaying blog posts.</span>}
                      {index === 2 && <span>ChatBot: A chatbot application designed using modern web technologies.</span>}
                      {index === 3 && <span>Recipe App: An app for sharing and discovering recipes with features like search, pagination, and recipe uploads.</span>}
                      {index === 4 && <span>IMAGINERA: A wallpaper download site using React.js and Tailwind CSS.</span>}
                      {index === 5 && <span>Weather API Site: A React.js site that fetches and displays weather data using an API.</span>}
                      <a href="https://github.com/amankumarchhari" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
            <ul className="carousel__thumbnails">
              {[...Array(6)].map((_, index) => (
                <li key={index}>
                  <label htmlFor={`slide-${index + 1}`}>
                    {index === 0 && <img src="https://htmlburger.com/blog/wp-content/uploads/2024/03/fitness-websites-inspiration.jpg  " alt="ALL FIT Screenshot" class="allfit-image" />}
                    {index === 1 && <img src="https://images04.nicepage.com/feature/461183/website-blog.jpg   " alt="Blog React App" />}
                    {index === 2 && <img src="https://verloop.io/wp-content/uploads/7-features-that-make-a-good-website-chatbot-great-08-1200x600.jpg  " alt="ChatBot" />}
                    {index === 3 && <img src=" https://www.radiustheme.com/wp-content/uploads/2021/10/Ranna.png " alt="Recipe App" />}
                    {index === 4 && <img src="https://cdn.dribbble.com/userupload/14096027/file/original-b0702a8c87d32281141472fb505f1c6a.png?resize=752x    " alt="IMAGINERA" />}
                    {index === 5 && <img src=" https://www.gconnect.in/gc22/wp-content/uploads/2024/09/imd-weather-forecast.jpg   " alt="Weather API Site" />}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
