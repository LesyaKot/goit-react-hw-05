import { Link, Outlet, useLocation } from "react-router-dom";
import "../../moviesApi";
import css from "./MovieCard.module.css";
import Loader from "../Loader/Loader";
import { Suspense } from "react";

export default function MovieCard({ movieDetails }) {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movieDetails;

  const location = useLocation();
  const from = location.state?.from ?? "/movies";

  const getGenres = (items) => {
    return items.map((item) => item.name).join(", ");
  };

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.posterwrap}>
          <img className={css.poster} src={poster_path} alt={original_title} />
        </div>

        <div className={css.textwrap}>
          <h2 className={css.title}>
            {original_title} ({release_date})
          </h2>
          <p className={css.score}>User Score: {vote_average}%</p>
          <h3 className={css.overviewtitle}>Overview</h3>
          <p className={css.overviewtext}>{overview}</p>
          <h3 className={css.genretitle}>Genres</h3>
          <p className={css.genretext}>{getGenres(genres)}</p>
        </div>
      </div>

      <div className={css.additionalwrap}>
        <h3 className={css.additionaltitle}>Additional information</h3>

        <div className={css.addwrap}>
          <Link to={"cast"} state={{ from }}>
            <p className={css.addtext}>Cast</p>
          </Link>
          <Link to={"reviews"} state={{ from }}>
            <p className={css.addtext}>Reviews</p>
          </Link>
        </div>
      </div>
      
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
