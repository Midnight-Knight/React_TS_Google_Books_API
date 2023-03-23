import React from 'react';
import "./style/App.css";
import {useDispatch} from "react-redux";
import {BooksSections} from "./components/SectionsUI/Sections";
import {Header} from "./components/HeaderUI/Header";
import {BackgroundBlock} from "./components/DivsUI/Divs";


function App() {
    return (
        <div className="App">
            <Header/>
            <BooksSections/>
            <BackgroundBlock/>
        </div>
    );
}

export default App;
