import { createStoreHook } from "react-redux";
import fruitReducer from "./FruitReducer";

const store = createStoreHook(fruitReducer);

export default store;