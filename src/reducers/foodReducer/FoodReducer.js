import { BUY_SANDWICH } from "./FoodTypes";

const foodState = {
    sandwich: 18
};
const foodReducer = (state = foodState ,action)=>{
    switch (action.type) {
        case BUY_SANDWICH:
            return {...state , sandwich: state.sandwich - action.payload};
        default:
            return state;
    }
};
export default foodReducer;