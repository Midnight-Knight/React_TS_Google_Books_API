import React from 'react';
import "./style/App.css";
import "./fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf";
import "./fonts/PTSans-Bold.ttf";
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
