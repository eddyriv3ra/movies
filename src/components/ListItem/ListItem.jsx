import React from "react";
import { Link } from "react-router-dom";
import "./ListItem.styles.scss";

const ListItem = ({ movie }) => {
  return (
    <div className="listItem">
      <Link to={`/movieDetails/${movie.id}`}>
        <img
          className="listItem__poster"
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </div>
  );
};

export default ListItem;
