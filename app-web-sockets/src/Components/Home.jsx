import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Redux/actions";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  const totalPage = 500;
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setPage(selectedPage);
    dispatch(getMovies(page));
  };

  useEffect(() => {
    dispatch(getMovies(page));
  }, [dispatch, page]);

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>PELICULAS EN TENDENCIA</h1>
      <ul className={styles.cardGrid}>
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          );
        })}
      </ul>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={totalPage / 20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      <Footer/>
    </div>
  );
};

export default Home;
