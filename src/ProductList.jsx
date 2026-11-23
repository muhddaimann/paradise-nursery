import { useDispatch } from 'react-redux'
import { addToCart } from './CartSlice.jsx'

const plants = [
  { id: 'monstera', name: 'Monstera Deliciosa', price: 32, category: 'Foliage' },
  { id: 'snake-plant', name: 'Snake Plant', price: 24, category: 'Low light' },
  { id: 'peace-lily', name: 'Peace Lily', price: 28, category: 'Flowering' },
]

function ProductList() {
  const dispatch = useDispatch()

  return (
    <main className="page">
      <p className="eyebrow">Our collection</p>
      <h1>Houseplants</h1>
      <p className="intro">A starter selection for the Paradise Nursery catalog.</p>
      <section className="content-grid" aria-label="Houseplant catalog">
        {plants.map((plant) => (
          <article className="plant-card" key={plant.id}>
            <p className="eyebrow">{plant.category}</p>
            <h2>{plant.name}</h2>
            <p className="plant-price">${plant.price.toFixed(2)}</p>
            <button type="button" onClick={() => dispatch(addToCart(plant))}>
              Add to cart
            </button>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ProductList