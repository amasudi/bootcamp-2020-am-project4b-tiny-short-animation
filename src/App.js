import React from "react";
import { Cloud1 } from "./components/Cloud1";
import { JetPlane } from "./components/JetPlane";
import { Birds } from "./components/Birds";
import { Cloud2 } from "./components/Cloud2";
import { Train } from "./components/Train";
import { Landscape } from "./components/Landscape";
function App() {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Cloud1 />
      <JetPlane />
      <Birds />
      <Cloud2 />
      <Train />
      <Landscape />
    </div>
  );
}

export default App;
