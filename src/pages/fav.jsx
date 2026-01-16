import "../css/Fav.css";
import { useMovieContext } from "../contexts/Moviecontext";
import MovieCard from "../components/moviecard.jsx";

function Fav() {
  const { fav } = useMovieContext();

  if (fav.length > 0) {
    return (
      <div className="fav page">
        <div className="favs">
        <h2>Your Favorite Movies!!</h2>
        <div className="movie-grid">
          {fav.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
      </div>
      
    );
  }

  return (
    <div className="fav-empty">
      <h2>No Favorites Added</h2>
      <p>Add movies to your Favorites and they will appear here!</p>
    </div>
  );
}

export default Fav;
