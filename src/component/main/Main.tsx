import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Aboutme from "../../page/aboutme/Aboutme";

function Main() {
  return (
    <main>
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
        <Route path="about" element={<Aboutme />} />
        {/* <Route path="post" element={<Post />} />
        <Route path="artDetail" element={<ArtDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </main>
  );
}

export default Main;
