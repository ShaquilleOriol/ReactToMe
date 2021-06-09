import React from "react";
import bioPic from "../assets/images/bio-pic.png";

const About = () => (
  <div
    className="text-center"
    style={{
      backgroundColor: "#122240",
      color: "#9ba6ab",
      padding: "35px",
    }}
  >
    <h1 id="about">About Me</h1>
    <img
      src={bioPic}
      style={{ width: "50%", padding: "35px" }}
      alt="pic of author"
    />
    <p
      style={{
        fontSize: "20px",
      }}
    >
      Growing up in the Big Apple! I had the luxury to experience living in one of the biggest melting pots of the world. Where opportunities are endless. I recently made a career change from Architecture to Full Stack Software Engineering because, I believe the combination and innovation between tech, creativity, and science are important for our future. 
      Web development provides an incredible creative outlet with vast opportunities for continuous learning. I feel incredibly optimistic and thankful to be able and ready to learn new skills. Currently, I'm enrolled in the University of Texas at Austin Full Stack Coding Bootcamp. Checkout my LinkedIn page for specific skills, experience, and education details. 
      Also, Browse my github page for current and past projects! Don't forget to head over to my portfolio page! 
    </p>
    <p
      style={{
        fontSize: "20px",
      }}
    >
      Currently, I'm enrolled in the University of Texas at Austin Full Stack Coding Bootcamp. Checkout my LinkedIn page for specific skills, experience, and education details. 
      Also, Browse my github page for current and past projects! Don't forget to head over to my portfolio page! 
    </p>
  </div>
);

export default About;