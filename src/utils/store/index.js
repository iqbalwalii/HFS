import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Cookies from "js-cookie";
import ACTIONS from "./actions";

const initialState = {
  userData: Cookies.get("userData")
    ? {
        ...JSON.parse(Cookies.get("userData")),
        shippingAddress: Cookies.get("shippingAddress")
          ? JSON.parse(Cookies.get("shippingAddress"))
          : null,
      }
    : {},
  cart: Cookies.get("cartItems") ? JSON.parse(Cookies.get("cartItems")) : [],
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    // User Login
    case ACTIONS.addUser: {
      Cookies.set("userData", JSON.stringify({ ...payload }));
      return {
        ...state,
        userData: { ...payload },
      };
    }

    // User Logout
    case ACTIONS.userLogout: {
      Cookies.remove("userData");
      Cookies.remove("cartItems");
      Cookies.remove("shippingAddress");
      return {
        ...state,
        userData: null,
        cart: [],
      };
    }

    // Delete cartItems
    case ACTIONS.clearCart: {
      Cookies.remove("cartItems");

      return { ...state, cart: [] };
    }
    // set searc hterm
    case ACTIONS.setSearch: {
      console.log("setting", payload);
      return { ...state, searchTerm: payload };
    }

    // Add new item to cart
    case ACTIONS.addToCart: {
      const exist = state.cart.find((item) => item.slug == payload.slug);

      if (exist) {
        return state;
      }
      const newItems = [
        ...state.cart,
        {
          ...payload,
        },
      ];
      Cookies.set("cartItems", JSON.stringify(newItems));

      return {
        ...state,
        cart: newItems,
      };
    }

    // Remove Item from Cart
    case ACTIONS.removeFromCart: {
      const newItems = state.cart.filter((item) => item.slug !== payload.slug);
      Cookies.set("cartItems", JSON.stringify(newItems));
      return {
        ...state,
        cart: newItems,
      };
    }

    // Save Shipping Address
    case ACTIONS.saveShippingAddress: {
      Cookies.set("shippingAddress", JSON.stringify(payload));
      return {
        ...state,
        userData: {
          ...state.userData,
          shippingAddress: payload,
        },
      };
    }

    // Update existing Cart Item
    case ACTIONS.updateProduct: {
      const newItems = state.cart.map((item) => {
        if (item.slug == payload.slug) {
          item.total = payload.total;
          item.quantity = payload.quantity;
        }
        return item;
      });
      Cookies.set("cartItems", JSON.stringify(newItems));

      return {
        ...state,
        cart: newItems,
      };
    }

    // Default Case
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
