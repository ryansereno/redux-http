import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cartState) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "Sending...",
        status: "pending",
        message: "Sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-test-fd9c9-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartState),
        }
      );
      if (!response.ok) {
        throw new Error("could not add to cart");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          title: "Success!",
          status: "success",
          message: "Added to cart",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "error!",
          status: "error",
          message: "error to cart",
        })
      );
    }
  };
};
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-test-fd9c9-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (erro) {
      dispatch(
        uiActions.showNotification({
          title: "error!",
          status: "error",
          message: "error to cart",
        })
      );
    }
  };
};
