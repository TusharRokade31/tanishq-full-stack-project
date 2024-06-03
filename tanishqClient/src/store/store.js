import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import userReducer from "./users/userSlice";
import cartReducer from "./cart/cartSlice";
import categoryReducer from "./categories/categorySlice";
import metalReducer from "./metal/metalSlice";
import genderReducer from "./gender/genderSlice";
const store = configureStore({
  reducer: {
    productss: productReducer,
    categoriess: categoryReducer,
    metalss: metalReducer,
    genderss: genderReducer,
    userss: userReducer,
    cartss: cartReducer,
  },
});

export default store;
