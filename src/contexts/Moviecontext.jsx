import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext(null);

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storedFav = localStorage.getItem("favMovies");
    if (storedFav) {
      setFav(JSON.parse(storedFav));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favMovies", JSON.stringify(fav));
  }, [fav]);

  const addToFav = (movie) => {
    setFav((prev) =>
      prev.some((m) => m.imdbID === movie.imdbID)
        ? prev
        : [...prev, movie]
    );
  };

  const removeFromFav = (imdbID) => {
    setFav((prev) => prev.filter((m) => m.imdbID !== imdbID));
  };

  const isFavored = (imdbID) => {
    return fav.some((m) => m.imdbID === imdbID);
  };

  return (
    <MovieContext.Provider
      value={{ fav, addToFav, removeFromFav, isFavored }}
    >
      {children}
    </MovieContext.Provider>
  );
};
