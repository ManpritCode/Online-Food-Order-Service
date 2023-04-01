import { createStore} from "redux";
import reducer from "./reducers/index";
 
export default function configStore(initialState){
  
       const store= createStore(reducer,initialState);
     return   store;
}