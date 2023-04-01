let defaultstate2 = {
    userinformation: { userdata: '' }
}

let cartReducer2 = (state = defaultstate2, action) => {
    switch (action.type) {
        case 'userinformation': {
            let newstate2 = { ...state }
            newstate2.userinformation = {
                userdata: [...newstate2.userinformation.userdata, action.payload]
            }
            console.log("userinformation ad", newstate2)
            return newstate2;
        }
        default: return state;
    }
}

export default cartReducer2;