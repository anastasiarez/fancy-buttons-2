import './App.css';
import { useState } from "react";
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {
  const [light, setLight] = useState("off");
  
  const switchLight = () => {
    if (light === "on") {
      setLight("off");
    } else {
      setLight("on");
    }
  };
  
  //light and switchLight are passed as props to LightSwitchButton

  const dark = (light === "off") ? "dark" : "";
  
  return (
    <div className={`App ${dark}`}>
      <section> <h1> Fancy Buttons </h1> </section>
      <AngryButton />
      <CounterButton />
      <LightSwitchButton light={light} switchLight={switchLight} />
      <TextRepeaterButton />
    </div>
  );
}

export default App;
