// React Tutorial: https://www.youtube.com/watch?v=SqcY0GlETPk
// Install tailwindCSS: https://tailwindcss.com/docs/installation/using-vite

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Vrijdagavond from "./pages/Vrijdagavond";
import Gallerij from "./pages/Gallerij";
import Liturgie from "./pages/Liturgie";
import Kerkboeken from "./pages/Kerkboeken";
import {Activiteiten} from "./pages/Activiteiten";
import { ActiviteitenHome } from "./pages/Activiteiten";
import ActiviteitInschrijven from "./pages/ActInschrijf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="vrijdagavond" element={<Vrijdagavond />} />
          <Route path="liturgie" element={<Liturgie />} />
          <Route path="kerkboeken" element={<Kerkboeken />} />
          <Route path="gallerij" element={<Gallerij />} />
          <Route path="*" element={<Home />} />
          <Route path="activiteiten" element={<Activiteiten />} >
            <Route index element={<ActiviteitenHome />} />
            <Route path="inschrijven" element={<ActiviteitInschrijven />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;