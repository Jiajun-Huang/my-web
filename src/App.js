import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./component/nav/Navigation.tsx";
import Aboutme from "./page/aboutme/Aboutme.jsx";
import Footer from "./component/footer/Footer.jsx";
import React from "react";
import Main from "./component/main/Main.tsx";

function App() {
  return (
    <div className="AppBox">
      <Navigation></Navigation>
      <Main></Main>
      <Aboutme></Aboutme>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
