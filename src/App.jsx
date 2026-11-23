import { Link, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import CartItem from './CartItem.jsx'
import ProductList from './ProductList.jsx'
import './App.css'

function Home() {
  return (
    <main className="landing-page">
      <section className="landing-hero" aria-labelledby="landing-title">
        <div className="landing-hero__content">
          <p className="landing-hero__eyebrow">Bring the outdoors home</p>
          <h1 id="landing-title">Paradise Nursery</h1>
          <p className="landing-hero__description">
            Thoughtfully chosen houseplants and simple care guidance for every
            kind of plant parent.
          </p>
          <Link className="cta-button" to="/plants">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/">Paradise Nursery</Link>
        <nav aria-label="Primary navigation">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
