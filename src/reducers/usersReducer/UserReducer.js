import { REQUEST_TO_SERVER, SHOW_ERROR, SHOW_USERS } from "./UserTypes";

const userInit = {
    loading: false,
    data: [],
    error: ""
}
const userReducer = (state = userInit , action)=>{
    switch (action.type) {
        case REQUEST_TO_SERVER:
            return {...state , loading: true}
        case SHOW_USERS:
            return {loading: false , data: action.payload , error: ""}
        case SHOW_ERROR:
            return {loading: false , data: [] , error: action.payload}
        default:
            return state;
    }
}
export default userReducer;