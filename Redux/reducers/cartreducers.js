let defaultState = {
    selecteditems: { items: [], restuarantName: '', restaurantid:''}
}


let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = { ...state };
            if (action.payload.checkboxValue) {
                console.log("ADD_TO_CART")

                newState.selecteditems = {
                    items: [...newState.selecteditems.items, action.payload],
                    restuarantName: action.payload.restuarantName,
                    restaurantid:action.payload.restaurantid,
                    checkboxValue: action.payload.checkboxValue
                };

            } else {
                console.log('REMOVE_FROM_CART')
                newState.selecteditems = {
                    items: [
                        ...newState.selecteditems.items.filter(
                            (item) => item.title != action.payload.title
                        ),
                    ],
                    restuarantName: action.payload.restuarantName,
                }
            }
            console.log("save data into cartitems",newState);
            return newState
        }
 default:
            return state
    }
} 

export default cartReducer;