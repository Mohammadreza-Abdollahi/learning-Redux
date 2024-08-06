import { BUY_APPLE, BUY_BANANA, BUY_ORANGE } from "./FruitTypes";

const fruitState = {
    apple: 15,
    orange: 10,
    banana: 20,
}
const fruitReducer = (state = fruitState,action)=>{
    switch (action.type) {
        case BUY_APPLE:
            return {...state , apple : state.apple - 1 }
        case BUY_ORANGE:
            return {...state , orange : state.orange - 1 }
        case BUY_BANANA:
            return {...state , banana : state.banana - 1 }    
        default:
            return state
    }
}
export default fruitReducer;