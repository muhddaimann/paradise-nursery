import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice.jsx'

function CartItem() {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <main className="page">
      <p className="eyebrow">Your selections</p>
      <h1>Shopping cart</h1>
      {items.length === 0 ? (
        <p className="empty-state">Your cart is ready for a new plant.</p>
      ) : (
        <section aria-label="Cart items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <div className="cart-item__header">
                <h2>{item.name}</h2>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
              <p>Quantity: {item.quantity}</p>
              <div className="actions">
                <button type="button" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>Decrease</button>
                <button type="button" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>Increase</button>
                <button type="button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default CartItem