import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import List from "../../components/List";

const Wishlist = () => {
  const [values] = useLocalStorage("wishlist", []);

  return <List movies={values} />;
};

export default Wishlist;
