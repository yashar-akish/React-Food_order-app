import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-item']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      <div>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}></button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
