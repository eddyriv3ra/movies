import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../api/enpoints";
import AdditionalInfo from "../../components/AdditionalInfo";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./MovieDetails.styles.scss";

const themes = {
  28: "theme-1",
  878: "theme-2",
  35: "theme-3",
};

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useQuery(["movie", id], fetchMovie);
  const [values, setValues] = useLocalStorage("wishlist", []);

  if (isLoading) return null;

  const themeByGenre = () => {
    const theme = movie?.genres?.find((genre) => themes[genre?.id]);
    return themes[theme?.id];
  };

  return (
    <div className={`details ${themeByGenre()}`}>
      <div className="details__wrapper">
        {movie?.poster_path && (
          <img
            className="details__wrapper__image"
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt={movie?.title}
          />
        )}
        <div className="details__wrapper__container">
          <h2 className="title">{movie?.title}</h2>
          <div className="content">
            {movie.tagline}

            <div className="movie-detail">
              <h4 className="title-description">Reseña:</h4>
              {movie?.overview}
            </div>
            <button onClick={() => setValues(movie)}>
              {values.find((value) => value.id === movie?.id)
                ? "Remove from wishlist"
                : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
      <AdditionalInfo movie={movie} />
    </div>
  );
};

export default MovieDetails;
