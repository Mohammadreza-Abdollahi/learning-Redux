import { BUY_APPLE, BUY_BANANA, BUY_ORANGE } from "./FruitTypes";

const fruitState = {
    apple: 15,
    orange: 10,
    banana: 20,
}
const fruitReducer = (state = fruitState,action)=>{
    switch (action.type) {
        case BUY_APPLE:
            return {...state , apple : state.apple - action.payload }
        case BUY_ORANGE:
            return {...state , orange : state.orange - action.payload }
        case BUY_BANANA:
            return {...state , banana : state.banana - action.payload }    
        default:
            return state
    }
}
export default fruitReducer;