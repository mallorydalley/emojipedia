import React from "react";
import emojipedia from "../emojipedia";
import createEntry from "./createEntry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <d1 className="dictionary">{emojipedia.map(createEntry)}</d1>
    </div>
  );
}

export default App;
