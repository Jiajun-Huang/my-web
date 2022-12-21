import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../page/about/About.jsx";
import "./Main.style.scss";

function Main() {
  return (
    <main className="main">
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="classes" element={<Classes />} />
        <Route path="tags" element={<Tags />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="img" element={<Img />} />
        <Route path="say" element={<Say />} />
        <Route path="msg" element={<Msg />} />
        <Route path="link" element={<Link />} />
        <Route path="show" element={<Show />} />
        <Route path="log" element={<Log />} /> */}
        <Route path="about" element={<About />} />

        {/* <Route path="*" element={NotFound}/> */}
      </Routes>
    </main>
  );
}

export default Main;
