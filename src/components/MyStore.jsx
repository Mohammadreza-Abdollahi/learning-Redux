import { connect } from "react-redux";

const MyStore = (props) => {
    console.log(props);
    return ( 
        <>
        <section className="row my-5">
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد موز</h3>
                <h1 className="mb-4">0</h1>
                <button className="btn btn-warning">خرید</button>
            </div>
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد پرتقال</h3>
                <h1 className="mb-4">0</h1>
                <button className="btn btn-danger">خرید</button>
            </div>
            <div className="col-4 text-center">
                <h3 className="mb-5">:تعداد سیب</h3>
                <h1 className="mb-4">0</h1>
                <button className="btn btn-success">خرید</button>
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