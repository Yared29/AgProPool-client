import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import adminReducer from "../redux/slices/adminSlice";
import mediatorSlice from "../redux/slices/mediatorSlice";
import farmerSlice from "../redux/slices/farmerSlice";
import farmerAgentSlice from "../redux/slices/farmerAgentSlice";
import transactionSlice from "../redux/slices/transactionSlice";
import cropSlice from "../redux/slices/cropSlice";
import kebeleSlice from "../redux/slices/kebeleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    mediator: mediatorSlice,
    farmer: farmerSlice,
    farmerAgent: farmerAgentSlice,
    transaction: transactionSlice,
    crop: cropSlice,
    kebele: kebeleSlice,
  },
  //   devTools: false,
});

export default store;
