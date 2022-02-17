const API_KEY = process.env.API_KEY;
const url = "https://api.themoviedb.org/3/";

const fetchData = (url) => {
  return fetch(url).then((response) => response.json());
};

export const fetchMovies = async () => {
  try {
    const response = await Promise.all([
      fetchData(`${`${url}discover/movie?api_key=${API_KEY}&with_genres=28`}`),
      fetchData(`${`${url}discover/movie?api_key=${API_KEY}&with_genres=878`}`),
      fetchData(`${`${url}discover/movie?api_key=${API_KEY}&with_genres=35`}`),
    ]);

    const data = response.map((d, i) => {
      if (i === 0) {
        return {
          ...d,
          genre: "Action",
        };
      }
      if (i === 1) {
        return {
          ...d,
          genre: "Sci-Fi",
        };
      }
      if (i === 2) {
        return {
          ...d,
          genre: "Comedy",
        };
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovie = async ({ queryKey }) => {
  const [_, movieId] = queryKey;
  try {
    const response = await fetch(
      `${url}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
