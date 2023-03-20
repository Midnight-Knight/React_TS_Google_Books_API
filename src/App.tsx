import React from 'react';
import "./style/App.css";
import {useDispatch} from "react-redux";
import {FirstSections} from "./components/SectionsUI/Sections";
import {Header} from "./components/HeaderUI/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <FirstSections/>
    </div>
  );
}

export default App;
