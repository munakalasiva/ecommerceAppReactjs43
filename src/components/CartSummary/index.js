import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0

      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      const count = cartList.length

      return (
        <div className="align-summary">
          <div className="summary">
            <h1>
              Order total: <span>Rs{total}/- </span>
            </h1>
            <p>{count} items in cart</p>
            <button type="button" className="che-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
