let defaultState1 ={
    selectid:{ customerid:''}
}

let cartReducer1=(state = defaultState1,action)=>{

    switch(action.type){
        case "addid":{
            let newstateid ={...state}
            newstateid.selectid={
               
                 customerid:[...newstateid.selectid.customerid,action.payload],
                  
            }
            console.log("new state id",newstateid)
            return newstateid
        }
      default:return state
    }
}
export default cartReducer1;