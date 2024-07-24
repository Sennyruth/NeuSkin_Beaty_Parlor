import useCartStore from "../Store/cartStore"
import "./Orders.css"
function Orders() {
  
const { cart, removeFromCart, clearCart } = useCartStore();
  

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="orders-cart">
          <ul className="orders-list">
            {cart.map((item) => (
              <li key={item.id}className="orders-items">
                <img src={item.img} alt={item.title} width={50} />
                {item.title} - {item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  )
}

export default Orders
