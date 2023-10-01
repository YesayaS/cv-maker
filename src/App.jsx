import { useState } from "react";
import "./App.css";
import "./components/inputCV";
import "./components/previewCV";
import { InputCV } from "./components/inputCV";
import { PreviewCV } from "./components/previewCV";

function App() {
  return (
    <>
      <div className="app">
        <InputCV></InputCV>
        <PreviewCV></PreviewCV>
      </div>
    </>
  );
}

export default App;
