import { BUY_SANDWICH } from "./FoodTypes"

export const buySandwich = (count)=>{
    return{
        type: BUY_SANDWICH,
        payload: count
    }
};