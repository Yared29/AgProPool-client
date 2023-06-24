import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import farmerSlice from "../redux/slices/farmerSlice";
import transactionSlice from "../redux/slices/transactionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    farmer: farmerSlice,
    transaction: transactionSlice,
  },
  //   devTools: false,
});

export default store;
