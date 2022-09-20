import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
    const cartQuantity = useSelector(state =>{
        return state.cart.totalQuantity
    })
  const dispatch = useDispatch();
  const toggleCartVisibleHandler = (event) => {
    dispatch(uiActions.toggleVisible());
  };

  return (
    <button className={classes.button} onClick={toggleCartVisibleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
