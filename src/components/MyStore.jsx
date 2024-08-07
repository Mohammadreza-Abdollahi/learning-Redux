import { useDispatch, useSelector } from "react-redux";
import { buyApple, buyBanana, buyOrange } from "../reducers/fruitReducer/FruitActions";
import { buySandwich } from "../reducers/foodReducer/FoodActions";

const MyStore = () => {
    const {apple , orange , banana} = useSelector((state)=>state.fruit)
    const { sandwich} = useSelector((state)=>state.food)
    const dispatch = useDispatch()
    return ( 
        <>
        <section className="row my-5">
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد موز</h3>
                <h1 className="mb-4">{apple}</h1>
                <button onClick={()=>dispatch(buyApple())} className="btn btn-warning">خرید</button>
            </div>
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد پرتقال</h3>
                <h1 className="mb-4">{orange}</h1>
                <button onClick={()=>dispatch(buyOrange())} className="btn btn-danger">خرید</button>
            </div>
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد سیب</h3>
                <h1 className="mb-4">{banana}</h1>
                <button onClick={()=>dispatch(buyBanana())} className="btn btn-success">خرید</button>
            </div>
        </section>
        <section className="row text-center">
            <div className="col-12 text-center">
                <h3 className="mb-5">:تعداد ساندویچ</h3>
                <h1 className="mb-4">{sandwich}</h1>
                <button onClick={()=>dispatch(buySandwich())} className="btn btn-info">خرید</button>
            </div>
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