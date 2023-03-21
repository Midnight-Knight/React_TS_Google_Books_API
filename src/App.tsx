import React from 'react';
import "./style/App.css";
import {useDispatch} from "react-redux";
import {BooksSections} from "./components/SectionsUI/Sections";
import {Header} from "./components/HeaderUI/Header";
import {BackgroundBlock} from "./components/DivsUI/Divs";
import {searchBooks} from "./logic/Books/BooksManager";

function App() {
    console.log(searchBooks("js"));
  return (
    <div className="App">
        <Header/>
        <BooksSections/>
        <BackgroundBlock/>
    </div>
  );
}

export default App;
