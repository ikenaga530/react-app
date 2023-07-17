import React from "react";
import "./App.css";
import PraState from "./components/PraState";
import Bar from "./components/Bar";
import { RecoilRoot } from "recoil";
import PraUseeffect from "./components/PraUseeffect";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <PraState />
        <Bar />
        <PraUseeffect />
        <Bar />
      </RecoilRoot>
    </div>
  );
}

export default App;
