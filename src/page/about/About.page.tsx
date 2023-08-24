//componement
import { Switch } from "antd";
import { useState } from "react";
import AboutMe from "./aboutme";
import AboutWebsite from "./aboutwebsite";
import Card from "../../component/card/Card.component";
import Title from "../../component/title/Title.component";
import "./About.style.scss";
export default function About() {
  const startWithAboutMe = true;

  const [state, setState] = useState(startWithAboutMe);

  const onChange = (checked: boolean) => {
    setState(checked ? true : false);
  };
  const leftClassName = state ? "about-switch-unselect" : "about-switch-select";
  const rightClassName = state
    ? "about-switch-select"
    : "about-switch-unselect";

  return (
    <div className='about'>
      <Title>About</Title>
      <Card color='main'>
        <div className='about-switch'>
          <span className={leftClassName}>About website</span>
          <Switch onChange={onChange} defaultChecked={startWithAboutMe} />
          <span className={rightClassName}>About me</span>
        </div>
        {state ? <AboutMe /> : <AboutWebsite />}
      </Card>
    </div>
  );
}
