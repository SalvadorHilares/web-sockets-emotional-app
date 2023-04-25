import { GET_MOVIES, GET_MOVIES_DETAILS, GET_REVIEWS} from "./actions";

const initialState = {
    movies: [],
    reviews: [],
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
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            };
        default:
            return { ...state };
    }
};

export default rootReducer;