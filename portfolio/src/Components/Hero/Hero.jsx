import React from "react";
import "./Hero.css";
import profile from "../../assets/images.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="Amit Kumar" className="hero-img" />

      <h1>
        Hi, I’m <span>Amit Kumar</span>
      </h1>

      <h2>Software Developer (Backend-Heavy)</h2>

      <p>
        I build scalable, production-ready SaaS products using
        <strong> Node.js, Express, MongoDB, Redis, and AWS</strong>.
        <br />
        3+ years of experience building <strong>0→1 products</strong>,
        microservices, payment systems, and multi-tenant architectures.
      </p>
    </div>
  );
};

export default Hero;
