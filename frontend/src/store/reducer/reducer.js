import {POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS} from "../actions/action";

const initialState = {
    data:{},
    loading:false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_DATA_REQUEST:
            return {...state, loading:true};
        case POST_DATA_SUCCESS:
            return {...state, data:action.value, loading: false};
        case POST_DATA_FAILURE:
            return {...state, loading: false};
        default:
            return state;
    };
};