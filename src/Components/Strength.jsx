import React from 'react'
import './Strength.css'

const Strength = () => {
  return (
    <div>
      <div class="header">
      <span className='hero--text'> MY STRENGTHS   </span>
  </div>
  <div class="row1-container">
    <div class="box box-down cyan">
      <h2>REACT JS</h2>
      <p>Proficient in building scalable and efficient React applications with a strong understanding of state management and component lifecycle.</p>
      <img src="https://img.icons8.com/nolan/64/react-native.png" alt="" />
    </div>

    <div class="box red">
      <h2> NODE JS</h2>
      <p>Skilled in developing server-side applications with Node.js, utilizing its asynchronous and event-driven nature to create high-performance systems.</p>
      <img src="https://img.icons8.com/nolan/64/node-js.png" alt="" />
    </div>

    <div class="box box-down blue">
      <h2>EXPRESS JS</h2>
      <p>Experienced in building robust and flexible web applications using Express.js, with a focus on routing, middleware, and API design.</p>
      <img src="https://img.icons8.com/nolan/64/express-js.png" alt="" /> 
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
      <h2>MONGO DB  </h2>
      <p>Proficient in designing and implementing NoSQL databases with MongoDB, utilizing its flexible schema and high-performance capabilities.</p>
      <img src="https://img.icons8.com/nolan/64/mongo-db.png" alt="" />
    </div>
  </div>
    </div>
  )
}

export default Strength