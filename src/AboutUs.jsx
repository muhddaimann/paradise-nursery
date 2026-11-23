import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__panel">
          <p className="about-hero__eyebrow">Our story</p>
          <h1 id="about-title">Plants for every space</h1>
          <p>
            Paradise Nursery began with a simple belief: caring for plants
            should feel welcoming, not intimidating. We curate resilient,
            beautiful houseplants and share practical guidance so every home
            can make room for more green.
          </p>
          <Link className="cta-button" to="/plants">
            Explore the collection
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AboutUs