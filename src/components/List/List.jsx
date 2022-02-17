import React, { useEffect, useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItem from "../ListItem/ListItem";
import "./List.styles.scss";

const List = ({ movies, genre }) => {
  const listContainerRef = useRef();
  const [currentContainerSize, setCurrentContainerSize] = useState(0);
  const { innerWidth: width } = window;
  const availableWidthToScroll = currentContainerSize - width + 100;

  useEffect(() => {
    setCurrentContainerSize(listContainerRef.current.clientWidth);
  }, []);

  const handleClick = (direction) => {
    let distance = listContainerRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && distance < 0) {
      listContainerRef.current.style.transform = `translateX(${
        520 + distance
      }px)`;
    }
    if (direction === "left" && Math.abs(distance) <= 700) {
      listContainerRef.current.style.transform = `translateX(0px)`;
    }
    if (direction === "right" && Math.abs(distance) < availableWidthToScroll) {
      listContainerRef.current.style.transform = `translateX(${
        -520 + distance
      }px)`;
    }
    if (
      direction === "right" &&
      Math.abs(distance) + 600 >= availableWidthToScroll
    ) {
      listContainerRef.current.style.transform = `translateX(${
        -availableWidthToScroll + 100
      }px)`;
    }
  };

  return (
    <div className="list">
      <span className="list__title">{genre}</span>
      <div className="list__wrapper">
        <ArrowBackIosIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="list__wrapper__container" ref={listContainerRef}>
          {movies.map((movie, index) => {
            return <ListItem key={`movie-${index}`} movie={movie} />;
          })}
        </div>
        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
