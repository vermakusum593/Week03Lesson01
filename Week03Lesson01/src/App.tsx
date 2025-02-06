import "./App.css";
import Header from "./components/Header/Header.tsx";
import Gallery from "./pages/Gallery/Gallery.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter/Counter.tsx";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
