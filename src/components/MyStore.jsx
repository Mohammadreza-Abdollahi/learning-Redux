import { useDispatch, useSelector } from "react-redux";
import { buyApple, buyBanana, buyOrange } from "../reducers/fruitReducer/FruitActions";
import { buySandwich } from "../reducers/foodReducer/FoodActions";
import { useState } from "react";

const MyStore = () => {
    const {apple , orange , banana} = useSelector((state)=>state.fruit)
    const { sandwich} = useSelector((state)=>state.food)
    const dispatch = useDispatch()
    const [itemCount , setItemCount] = useState({
        apple : 1,
        orange: 1,
        banana: 1,
        sandwich: 1
    })
    return ( 
        <>
        <section className="row my-5">
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد موز</h3>
                <h1 className="mb-4">{apple}</h1>
                <div className="input-group">
                    <button onClick={()=>dispatch(buyApple(itemCount.apple))} className="btn btn-warning">خرید</button>
                    <input onChange={(e)=>setItemCount({...itemCount , apple: e.target.value})} className="form-control" type="number" />
                </div>
            </div>
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد پرتقال</h3>
                <h1 className="mb-4">{orange}</h1>
                <div className="input-group">
                    <button onClick={()=>dispatch(buyOrange(itemCount.orange))} className="btn btn-danger">خرید</button>
                    <input onChange={(e)=>setItemCount({...itemCount , orange: e.target.value})} className="form-control" type="number" />
                </div>
            </div>
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد سیب</h3>
                <h1 className="mb-4">{banana}</h1>
                <div className="input-group">
                    <button onClick={()=>dispatch(buyBanana(itemCount.banana))} className="btn btn-success">خرید</button>
                    <input onChange={(e)=>setItemCount({...itemCount , banana: e.target.value})} className="form-control" type="number" />
                </div>
            </div>
        </section>
        <section className="row text-center">
            <div className="col-4 text-center"></div>
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد ساندویچ</h3>
                <h1 className="mb-4">{sandwich}</h1>
                <div className="input-group">
                    <button onClick={()=>dispatch(buySandwich(itemCount.sandwich))} className="btn btn-info">خرید</button>
                    <input onChange={(e)=>setItemCount({...itemCount , sandwich: e.target.value})} className="form-control" type="number" />
                </div>
            </div>
            <div className="col-4 text-center"></div>
        </section>
        </>
     );
}
// const stateToProps = (state)=>{
//     return {
//         apple : state.apple,
//         orange : state.orange,
//         banana : state.banana,
//     }
// }
export default MyStore;