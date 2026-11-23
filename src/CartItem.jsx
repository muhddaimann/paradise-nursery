import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice.jsx'

function CartItem() {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const [checkoutMessage, setCheckoutMessage] = useState('')
  const itemQuantity = items.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <main className="page">
      <p className="eyebrow">Your selections</p>
      <h1>Shopping cart</h1>
      {items.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-state">Your cart is ready for a new plant.</p>
          <Link className="secondary-action" to="/plants">Continue Shopping</Link>
        </div>
      ) : (
        <>
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
          <section className="cart-summary" aria-label="Cart summary">
            <div className="cart-summary__line">
              <span>Items</span>
              <strong>{itemQuantity}</strong>
            </div>
            <div className="cart-summary__line cart-summary__total">
              <span>Cart total</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
            <div className="cart-summary__actions">
              <Link className="secondary-action" to="/plants">Continue Shopping</Link>
              <button type="button" onClick={() => setCheckoutMessage('Checkout is coming soon. Your cart is still available for review.')}>Checkout</button>
            </div>
            {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
          </section>
        </>
      )}
    </main>
  )
}

export default CartItem