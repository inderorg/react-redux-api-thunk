
export const initialState = {
    message : " ",
    apimessage: " ",
}

export const reducer = (state= initialState, action) => {
    if(action.type === "CLICK_ME"){
        return {
            ...state,
            message : "I am new message"
        }
    }
    else if(action.type === "FETCH_FINISHED"){
        return{
            ...state,
            apimessage : JSON.stringify(action.payload),
        }
    }
    return state;
}