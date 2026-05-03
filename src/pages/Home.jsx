import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero" data-aos="fade-up">
        <div className="hero-copy" data-aos="fade-right" data-aos-delay="100">
          <h1>Experience<br/>EngineeringExcellence</h1>
          <p>Looking for a experienced professional to tackle a project? Look no further than Prime Aspect. We are a leading structural consulting firm headquartered in India, dedicated to providing innovative and reliable structural designs and solutions. Our team of experienced engineers utilizes cutting-edge technology and industry best practices to deliver comprehensive structural design services tailored to meet the unique needs of each project. Get in touch for a free quote today.</p>
          <div className="button-row">
            <Link to="/services" className="button primary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
          <img src="https://static.wixstatic.com/media/36b354_2afc615e3cfc41678c940a37fc7c585f~mv2.jpg/v1/fill/w_649,h_1200,al_c,q_85,enc_avif,quality_auto/36b354_2afc615e3cfc41678c940a37fc7c585f~mv2.jpg" alt="Structural blueprint"/>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 data-aos="zoom-in">Our Story</h2>
        <p><strong>Committed to Excellence</strong></p>
        <p>We specialize in delivering comprehensive structural design services tailored to meet the unique needs of each project. Fueled by our commitment to engineering excellence, we go the extra mile to make sure clients are completely satisfied with our work. Call us today to schedule a consultation.</p>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 data-aos="zoom-in">Services</h2>
        <p><strong>Above and Beyond</strong></p>
        <p>At Prime Aspect, we specialize in delivering comprehensive structural design services tailored to meet the unique needs of each project. Our team of experienced engineers utilizes industry best practices to develop efficient, cost-effective, and sustainable solutions. Whether it's designing foundations, analyzing complex structural systems, or optimizing building materials, Prime Aspect is equipped to handle projects of any scale and complexity.</p>

        <div className="section--card-grid">
          <article className="card" data-aos="flip-left" data-aos-delay="100">
            <img src="https://static.wixstatic.com/media/36b354_72a2445708684d2793d5e37c76379ed1~mv2.png/v1/fill/w_283,h_377,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-20%20220402.png" alt="Our Approach"/>
            <h3>Our Approach</h3>
            <p><strong>Truly Top-Notch</strong></p>
            <p>At Prime Aspect, we prioritize collaboration, innovation, and client satisfaction. We work closely with architects, developers, and construction teams to ensure seamless integration of our structural solutions into the overall design and construction process. By combining technical expertise with a client-centric approach, we deliver results that exceed expectations and stand the test of time.</p>
          </article>

          <article className="card" data-aos="flip-right" data-aos-delay="200">
            <img src="https://static.wixstatic.com/media/36b354_86f8dd39f4b0405097d10685fe6332e4~mv2.jpeg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-05-09%20at%204_52_09%20PM.jpeg" alt="Cost Effectiveness"/>
            <h3>Cost - Effectiveness</h3>
            <p><strong>Only the Best</strong></p>
            <p>In today's competitive construction landscape, maximizing cost efficiency without compromising structural integrity is paramount. At Prime Aspect, we specialize in delivering cost-effective structural design solutions that help our clients optimize their project budgets while meeting their performance objectives.</p>
          </article>
        </div>
      </section>

      <section className="section card" data-aos="zoom-in">
        <h3>KEY OFFERINGS</h3>
        <ul data-aos="fade-up" data-aos-delay="100">
          <li>Structural design and analysis</li>
          <li>Foundation engineering</li>
          <li>Retrofitting and rehabilitation</li>
          <li>Seismic assessment and design</li>
          <li>High-rise building design</li>
          <li>Residential building design</li>
          <li>Commercial and industrial structures</li>
          <li>Consulting services</li>
        </ul>
      </section>
    </>
  )
}

export default Home
