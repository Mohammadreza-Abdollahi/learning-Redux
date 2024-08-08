import { Provider } from "react-redux";
// import MyStore from "./MyStore";
import store from "../reducers/Store";
import MyUsers from "./MyUsers";

const App = () => {
    return ( 
        <>
            <section className="container">
                <Provider store={store}>
                    <MyUsers/> 
                </Provider>
            </section>
        </>
    );
}
 
export default App;