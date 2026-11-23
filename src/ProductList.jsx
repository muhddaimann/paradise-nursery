import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './CartSlice.jsx'
import floweringThumbnail from './assets/plants/flowering.svg'
import foliageThumbnail from './assets/plants/foliage.svg'
import lowLightThumbnail from './assets/plants/low-light.svg'

const plants = [
  { id: 'monstera-deliciosa', name: 'Monstera Deliciosa', thumbnail: foliageThumbnail, price: 32, category: 'Foliage Favorites' },
  { id: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', thumbnail: foliageThumbnail, price: 38, category: 'Foliage Favorites' },
  { id: 'rubber-plant', name: 'Ruby Rubber Plant', thumbnail: foliageThumbnail, price: 29, category: 'Foliage Favorites' },
  { id: 'golden-pothos', name: 'Golden Pothos', thumbnail: foliageThumbnail, price: 22, category: 'Foliage Favorites' },
  { id: 'heartleaf-philodendron', name: 'Heartleaf Philodendron', thumbnail: foliageThumbnail, price: 24, category: 'Foliage Favorites' },
  { id: 'zz-plant', name: 'ZZ Plant', thumbnail: foliageThumbnail, price: 30, category: 'Foliage Favorites' },
  { id: 'snake-plant', name: 'Snake Plant', thumbnail: lowLightThumbnail, price: 24, category: 'Low-Light Living' },
  { id: 'cast-iron-plant', name: 'Cast Iron Plant', thumbnail: lowLightThumbnail, price: 27, category: 'Low-Light Living' },
  { id: 'chinese-evergreen', name: 'Chinese Evergreen', thumbnail: lowLightThumbnail, price: 26, category: 'Low-Light Living' },
  { id: 'parlor-palm', name: 'Parlor Palm', thumbnail: lowLightThumbnail, price: 34, category: 'Low-Light Living' },
  { id: 'dracaena-lisa', name: 'Dracaena Lisa', thumbnail: lowLightThumbnail, price: 31, category: 'Low-Light Living' },
  { id: 'bird-nest-fern', name: 'Bird’s Nest Fern', thumbnail: lowLightThumbnail, price: 25, category: 'Low-Light Living' },
  { id: 'peace-lily', name: 'Peace Lily', thumbnail: floweringThumbnail, price: 28, category: 'Flowering & Color' },
  { id: 'pink-anthurium', name: 'Pink Anthurium', thumbnail: floweringThumbnail, price: 36, category: 'Flowering & Color' },
  { id: 'moth-orchid', name: 'Moth Orchid', thumbnail: floweringThumbnail, price: 42, category: 'Flowering & Color' },
  { id: 'african-violet', name: 'African Violet', thumbnail: floweringThumbnail, price: 18, category: 'Flowering & Color' },
  { id: 'scarlet-bromeliad', name: 'Scarlet Bromeliad', thumbnail: floweringThumbnail, price: 35, category: 'Flowering & Color' },
  { id: 'kalanchoe-blossfeldiana', name: 'Kalanchoe', thumbnail: floweringThumbnail, price: 20, category: 'Flowering & Color' },
]

const categories = [...new Set(plants.map((plant) => plant.category))]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <main className="page">
      <p className="eyebrow">Our collection</p>
      <h1>Houseplants</h1>
      <p className="intro">Find the right plant for your space, routine, and growing confidence.</p>
      {categories.map((category) => (
        <section className="catalog-category" key={category} aria-labelledby={`category-${category}`}>
          <h2 id={`category-${category}`}>{category}</h2>
          <div className="catalog-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const cartItem = cartItems.find((item) => item.id === plant.id)

              return (
                <article className="plant-card" key={plant.id}>
                  <img alt={`${plant.name} plant`} className="plant-card__thumbnail" height="260" loading="lazy" src={plant.thumbnail} width="360" />
                  <div className="plant-card__body">
                    <h3>{plant.name}</h3>
                    <p className="plant-price">${plant.price.toFixed(2)}</p>
                    {cartItem && <p className="plant-card__cart-status" aria-live="polite">In cart: {cartItem.quantity}</p>}
                    <button disabled={Boolean(cartItem)} type="button" onClick={() => dispatch(addItem(plant))}>
                      {cartItem ? 'Added to cart' : 'Add to cart'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}

export default ProductList