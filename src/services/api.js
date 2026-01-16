const API_KEY = "c7d12696";
const BASE_URL = "https://www.omdbapi.com/";

// OMDb does NOT have "popular movies"
// So we simulate it with a default search (like the video does internally)
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}?s=batman&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search || [];
};

// Search movies by user query
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
  );
  const data = await response.json();
  console.log("SEARCH DATA 👉", data);
  return data.Search || [];
};
