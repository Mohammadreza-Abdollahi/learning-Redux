import { combineReducers } from "redux";
import fruitReducer from "./fruitReducer/FruitReducer";
import foodReducer from "./foodReducer/FoodReducer";

const rootReducer = combineReducers({
    fruit: fruitReducer,
    food: foodReducer,
})
export default rootReducer;