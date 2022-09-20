import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notifications from "./components/UI/Notifications";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitialLoad = true;

function App() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => {
    return state.cart;
  });
  const notificationState = useSelector((state) => {
    return state.ui.notification;
  });

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialLoad) {
      isInitialLoad = false;
      return;
    }
    if (cartState.changed) {
      dispatch(sendCartData(cartState));
    }
  }, [cartState, dispatch]);

  const cartIsVisible = useSelector((state) => {
    return state.ui.cartVisible;
  });

  return (
    <Fragment>
      {notificationState && (
        <Notifications
          title={notificationState.title}
          message={notificationState.message}
          status={notificationState.status}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
