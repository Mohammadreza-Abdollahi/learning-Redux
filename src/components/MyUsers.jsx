import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getErrors, getUsers, requestToServer } from "../reducers/usersReducer/UserActions";

const MyUsers = () => {
    const {loading , data , error} = useSelector(state=>state);
    const dispatch = useDispatch();
    const handleUsers = ()=>{
        dispatch(requestToServer())
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            dispatch(getUsers(res.data))
        }).catch(error=>{
            dispatch(getErrors(error))
        })
    }
    return ( 
        <>
            <h1 className="text-center display-6 mt-3">کاربران</h1>
            <section className="text-center d-grid">
                <button onClick={handleUsers} className="btn btn-primary py-2 my-3">دریافت کاربران</button>
                {
                    loading ? (
                        <div>
                            <div className="spinner-border text-primary" style={{width: 80 , height: 80}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : data.length > 0 ? (
                        <div className="text-center">
                            <ul className="list-group">
                                {data.map(item=>{
                                    return (
                                        <li className="list-group-item">{item.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    ) : error ? (
                        <div>
                            <div className="alert alert-danger" role="alert">{error}</div>
                        </div>
                    ) : (
                        <div>
                            <div className="alert alert-primary" role="alert">
                                کاربران را دریافت کنید
                            </div>
                        </div>
                    )
                }
            </section>
        </>
     );
}
 
export default MyUsers;