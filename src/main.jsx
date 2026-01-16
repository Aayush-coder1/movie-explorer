import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import "./css/index.css";
import App from "./App.jsx";
import { MovieProvider } from "./contexts/Moviecontext.jsx";

createRoot(document.getElementById("root")).render(

    <BrowserRouter>
    <MovieProvider>
            <App />
    </MovieProvider>
    </BrowserRouter>
);
