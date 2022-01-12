
import {useContext} from 'react';

import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCaretButton = props => {

  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return(
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  )
}

export default HeaderCaretButton;