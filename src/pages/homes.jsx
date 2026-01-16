import MovieCard from "../components/moviecard";
import "../css/Homes.css";
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Homes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadpopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch popular movies.");
      } finally {
        setLoading(false);
      }
    };
    loadpopularMovies();
  }, []);
  const handlesearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    if(loading) return;
    try {
      setLoading(true);
      const results = await searchMovies(searchTerm);
      setMovies(results);
      setError(null);
    } catch {
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home page">
      <div className="home">
      <form onSubmit={handlesearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default Homes;
