import { GET_MOVIES, GET_MOVIES_DETAILS } from "./actions";

const initialState = {
    movies: [],
    movieDetails: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        case GET_MOVIES_DETAILS:
            return {
                ...state,
                movieDetails: action.payload
            };
        default:
            return { ...state };
    }
};

export default rootReducer;