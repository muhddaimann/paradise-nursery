import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
  const cartQuantity = useSelector((state) => state.cart.items.reduce(
    (total, item) => total + item.quantity,
    0,
  ))

  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Paradise Nursery home">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path d="M16 27C7 22 6 12 11 5c6 2 9 7 8 13 3-4 7-5 11-4-1 7-6 12-14 13Z" fill="currentColor" />
              <path d="M11 24c3-5 7-9 13-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
            </svg>
          </span>
          <span className="brand__copy">
            <span className="brand__eyebrow">Indoor greenery</span>
            <span className="brand__name">Paradise Nursery</span>
          </span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <NavLink end to="/">Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <div className="header-actions">
          <Link className="cart-link" to="/cart" aria-label={`Cart, ${cartQuantity} ${cartQuantity === 1 ? 'item' : 'items'}`}>
            <svg aria-hidden="true" className="cart-link__icon" viewBox="0 0 24 24">
              <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L20.5 9H7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              <circle cx="10" cy="20" r="1.2" fill="currentColor" />
              <circle cx="17" cy="20" r="1.2" fill="currentColor" />
            </svg>
            <span>Cart</span>
            <span className="cart-link__count" aria-hidden="true">{cartQuantity}</span>
          </Link>
        </div>
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
