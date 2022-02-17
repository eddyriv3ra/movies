import React from "react";
import "./AdditionalInfo.styles.scss";

const AdditionalInfo = ({ movie }) => {
  return (
    <div className="additional-info">
      <div className="container">
        <div className="movie-detail">
          <h4 className="title-description">Puntuacion:</h4>
          <p>{movie?.vote_average} / 10</p>
        </div>
        <div className="movie-detail">
          <h4 className="title-description">Duracion:</h4>
          <p>
            {Math.floor(movie?.runtime / 60)} h{" "}
            {Math.round(
              (movie?.runtime / 60 - Math.floor(movie?.runtime / 60)) * 60
            )}{" "}
            min
          </p>
        </div>
        <div className="movie-detail">
          <h4 className="title-description">Fecha de lanzamiento:</h4>
          <p>{movie?.release_date}</p>
        </div>
        <div className="movie-detail">
          <h4 className="title-description">Categoria:</h4>
          <p>{movie?.genres.map((element) => element.name).join(" - ")}</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
