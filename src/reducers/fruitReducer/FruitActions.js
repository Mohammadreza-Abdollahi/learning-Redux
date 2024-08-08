import { BUY_APPLE, BUY_BANANA, BUY_ORANGE } from "./FruitTypes"

export const buyApple = (count)=>{
    return{
        type: BUY_APPLE,
        payload: count
    }
}
export const buyOrange = (count)=>{
    return{
        type: BUY_ORANGE,
        payload: count
    }
}
export const buyBanana = (count)=>{
    return{
        type: BUY_BANANA,
        payload: count
    }
}