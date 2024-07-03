import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Header from "../../components/Header";
import Erro from "../../pages/Error";
import Favorites from "../../pages/Favorites";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
