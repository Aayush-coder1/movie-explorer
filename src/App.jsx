import "./css/App.css";
import Fav from "./pages/fav";
import Homes from "./pages/homes";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/Moviecontext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <MovieProvider>
      {<Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
