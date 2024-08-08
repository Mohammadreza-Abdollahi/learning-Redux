import axios from "axios"
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
export const getUsersOut = ()=>{
    return (dispatch)=>{
        dispatch(requestToServer())
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            dispatch(getUsers(res.data))
        }).catch(error=>{
            dispatch(getErrors(error))
        })
    }
}