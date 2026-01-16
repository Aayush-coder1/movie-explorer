import styles from "../css/Moviecard.module.css";
import { useMovieContext } from "../contexts/Moviecontext";

function MovieCard({ movie }) {
  const { addToFav, removeFromFav, isFavored } = useMovieContext();
  const favourite = isFavored(movie.imdbID);

  function onFavClick() {
    if (isFavored(movie.imdbID)) {
      removeFromFav(movie.imdbID);
    } else {
      addToFav(movie);
    }
  }
  return (
    <div className={styles.movieCard}>
      <div className={styles.moviePoster}>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.Title}
        />

        <button
          className={`${styles.favBtn} ${favourite ? styles.active : ""}`}
          onClick={onFavClick}
        >
          ♥

        </button>

        <div className={styles.movieOverlay}></div>
      </div>
      <div className={styles.movieInfo}>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
