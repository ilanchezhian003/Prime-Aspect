import React from 'react'

function Services() {
  return (
    <>
      <section className="section" data-aos="fade-up">
        <h2 data-aos="zoom-in">Our Services</h2>
        <p data-aos="fade-up" data-aos-delay="100"><strong>Tailored to Your Needs</strong></p>
        <p data-aos="fade-up" data-aos-delay="200"><strong>Attention to Detail</strong></p>
        <p data-aos="fade-up" data-aos-delay="300"><strong>As Strong as New</strong></p>
        <p data-aos="fade-up" data-aos-delay="400"><strong>Efficient. Reliable. Exceptional.</strong></p>
        <p data-aos="fade-up" data-aos-delay="500"><strong>Redefining Spaces with Innovation</strong></p>
      </section>

      <section className="section--card-grid" data-aos="fade-up">
        <article className="card" data-aos="zoom-in" data-aos-delay="100">
          <h3>Structural Design</h3>
        </article>
        <article className="card" data-aos="zoom-in" data-aos-delay="150">
          <h3>Construction Planning</h3>
        </article>
        <article className="card" data-aos="zoom-in" data-aos-delay="200">
          <h3>Retrofitting & Rehabilitation</h3>
        </article>
        <article className="card" data-aos="zoom-in" data-aos-delay="250">
          <h3>Construction</h3>
        </article>
        <article className="card" data-aos="zoom-in" data-aos-delay="300">
          <h3>Architecture</h3>
        </article>
      </section>
    </>
  )
}

export default Services
