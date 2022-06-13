import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "src/reducers/modal";

const store = configureStore({ reducer: { modal: modalReducer } });

export default store;
