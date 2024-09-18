import React, { createContext, useContext, useState } from "react";
import Applink from "./Applink";
import Home from "./Home";
import Contacts from "./Contacts";
import LearnUseEffects from "./UseEffect/LearnUseEffect";
import LearnUseEffect1 from "./UseEffect/LearnUseEffect1";
import LearnForm1 from "./LearnFrom/LearnForm1";
import Parent from "./prop drilling/Parent";
import GreatGrandChild from "./prop drilling/GreatGrandChild";

export let Context = createContext();

const App = () => {
  let [name, setName] = useState("ram");
  return (
    <>
      <Context.Provider value={{ name, setName }}>
        <Parent />
        {/* <GreatGrandChild value={name} /> */}
      </Context.Provider>
      {/* <LearnForm1 /> */}
      {/* <LearnUseEffect1 /> */}
      {/* <LearnUseEffects />
      <Applink />
      <Contacts />
      <Home /> */}
    </>
  );
};

export default App;
