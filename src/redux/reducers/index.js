import { combineReducers } from "redux";
import { ProductReducer,SelectedReducer } from "./productReducer";

const reducers = combineReducers(
    {
        allProducts: ProductReducer ,
        product: SelectedReducer
    }
)
export default reducers;