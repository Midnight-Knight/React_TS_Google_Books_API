import React from 'react';
import "./style/App.css";
import {useDispatch} from "react-redux";
import {BooksSections} from "./components/SectionsUI/Sections";
import {Header} from "./components/HeaderUI/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <BooksSections/>
    </div>
  );
}

export default App;
