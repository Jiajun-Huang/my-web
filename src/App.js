import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./component/nav/Navigation.tsx";
import Footer from "./component/footer/Footer.jsx";
import React from "react";
import Main from "./component/main/Main.tsx";

function App() {
  return (
    <div className="AppBox bg">
      <Navigation></Navigation>
      <Main></Main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
