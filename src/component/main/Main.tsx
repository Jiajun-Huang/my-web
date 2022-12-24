import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../page/home/home.page.tsx";
import About from "../../page/about/About.page.jsx";
import Articles from "../../page/articles/articles.page.tsx";
import DoesNotExist from "../../page/doesNotExist/DoesNotExist.page.jsx";
import "./Main.style.scss";
import SingleArticle from "../../page/articles/article/singleArticle.page.tsx";

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
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="articles" element={<Articles />}></Route>
        <Route path="articles/:title" element={<SingleArticle />}></Route>
        <Route path="*" element={<DoesNotExist />} />
        {/* <Route path="*" element={NotFound}/> */}
      </Routes>
    </main>
  );
}

export default Main;
