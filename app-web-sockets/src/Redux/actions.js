export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_DETAILS = 'GET_MOVIES_DETAILS';

export const getMovies = (page) => {
    return async dispatch =>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b6f6827dfc33112b2442253451628eaf&language=en-US&page=${page}`
        ,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: GET_MOVIES,
            payload: data.results
        });
    }
}

export const getMoviesDetails = (id) => {
    return async dispatch =>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b6f6827dfc33112b2442253451628eaf&language=en-US`
        ,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        dispatch({
            type: GET_MOVIES_DETAILS,
            payload: data
        });
    };
}