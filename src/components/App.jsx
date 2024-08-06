import { Provider } from "react-redux";
import MyStore from "./MyStore";
import store from "../reducers/fruitReducer/FruitStore";

const App = () => {
    return ( 
        <>
            <section className="container">
                {/* <Provider store={store}> */}
                    <MyStore/> 
                {/* </Provider> */}
            </section>
        </>
    );
}
 
export default App;