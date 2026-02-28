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
import Activiteiten from "./pages/Activiteiten";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="vrijdagavond" element={<Vrijdagavond />} />
          <Route path="gallerij" element={<Gallerij />} />
          <Route path="liturgie" element={<Liturgie />} />
          <Route path="activiteiten" element={<Activiteiten />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;