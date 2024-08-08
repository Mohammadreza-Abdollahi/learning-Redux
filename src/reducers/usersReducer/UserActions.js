import { REQUEST_TO_SERVER, SHOW_ERROR, SHOW_USERS } from "./UserTypes"

export const requestToServer = ()=>{
    return{
        type: REQUEST_TO_SERVER
    }
}
export const getUsers = (data)=>{
    return{
        type: SHOW_USERS,
        payload: data
    }
}
export const getErrors = (error)=>{
    return{
        type: SHOW_ERROR,
        payload: error
    }
}