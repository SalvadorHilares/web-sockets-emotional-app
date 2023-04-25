import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../Redux/actions"
import ReactPaginate from "react-paginate";
import Card from "./Card"

const Home = () => {
  const totalPage = 500;
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies)

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setPage(selectedPage);
    dispatch(getMovies(page))
  };

  useEffect(() => {
    dispatch(getMovies(page))
  }, [dispatch, page])

  return (
    <>
    <h1>PELICULAS EN TENDENCIA</h1>
      {
      movies.map((movie) => {
        return <Card
         key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />}
      )
      }
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={totalPage/20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"inline-flex -space-x-px"}
        pageClassName={"px-3 py-2 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
        pageLinkClassName={"page-link"}
        previousClassName={"px-3 py-2 ml-0 leading-tight text-blue-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
        previousLinkClassName={"page-link"}
        nextClassName={"px-3 py-2 leading-tight text-blue-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
        nextLinkClassName={"page-link"}
        breakClassName={"px-3 py-2 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
        breakLinkClassName={"page-link"}
        activeClassName={"px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"}
      />
    </>
  )
}

export default Home