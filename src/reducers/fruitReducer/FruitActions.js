import { BUY_APPLE, BUY_BANANA, BUY_ORANGE } from "./FruitTypes"

export const buyApple = ()=>{
    return{
        type: BUY_APPLE
    }
}
export const buyOrange = ()=>{
    return{
        type: BUY_ORANGE
    }
}
export const buyBanana = ()=>{
    return{
        type: BUY_BANANA
    }
}