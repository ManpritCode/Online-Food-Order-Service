import { combineReducers } from "redux";
import cartReducer from "./cartreducers";
import cartReducer2 from "./userinformtion2";
import cartReducer1 from "./customeridreducer";


let reducers = combineReducers({
    cartReducer: cartReducer,
    cartReducer1: cartReducer1,
    cartReducer2: cartReducer2

})

const rootReducer = (state, action) => {
    return reducers(state, action)
}
export default rootReducer;