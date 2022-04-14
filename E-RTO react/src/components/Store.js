import { createStore } from "redux";
import reducer from "./Reducer";



const initialState= {"loggedin": false};

const myStore= createStore(reducer, initialState);

export default myStore;