import { Link, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
import './App.css'

function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <main className="page">
      <p className="eyebrow">React starter</p>
      <h1>Paradise Nursery</h1>
      <p className="intro">
        Your Vite-powered React project is ready with routing and Redux state
        management.
      </p>

      <section className="counter-card" aria-labelledby="counter-heading">
        <h2 id="counter-heading">Redux Toolkit counter</h2>
        <p className="count" aria-live="polite">{count}</p>
        <div className="actions">
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrease
          </button>
          <button type="button" onClick={() => dispatch(increment())}>
            Increase
          </button>
        </div>
      </section>
    </main>
  )
}

function About() {
  return (
    <main className="page">
      <p className="eyebrow">About</p>
      <h1>Starter application</h1>
      <p className="intro">
        This route confirms that React Router is configured and ready for your
        application pages.
      </p>
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
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
