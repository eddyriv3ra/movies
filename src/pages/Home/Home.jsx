import React from "react";
import { useQuery } from "react-query";
import { fetchMovies } from "../../api/enpoints";
import List from "../../components/List";
import "./Home.styles.scss";

const Home = () => {
  const { data, isLoading } = useQuery("movies", fetchMovies);

  if (isLoading) return null;

  return (
    <div className="home">
      {data.map((movies, index) => {
        return (
          <List key={index} movies={movies.results} genre={movies.genre} />
        );
      })}
    </div>
  );
};

export default Home;
