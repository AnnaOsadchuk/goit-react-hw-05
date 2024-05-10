import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

import Navigation from "./components/Navigation/Navigation";

export default function App() {
  return (
    <div>
      <h1>Films</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
