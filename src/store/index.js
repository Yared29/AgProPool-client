import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import mediatorSlice from "../redux/slices/mediatorSlice";
import farmerSlice from "../redux/slices/farmerSlice";
import transactionSlice from "../redux/slices/transactionSlice";
import cropSlice from "../redux/slices/cropSlice";
import kebeleSlice from "../redux/slices/kebeleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mediator: mediatorSlice,
    farmer: farmerSlice,
    transaction: transactionSlice,
    crop: cropSlice,
    kebele: kebeleSlice,
  },
  //   devTools: false,
});

export default store;
