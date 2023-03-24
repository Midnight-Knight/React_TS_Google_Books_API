import React from 'react';
import "./style/App.css";
import "./fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf";
import "./fonts/PTSans-Bold.ttf";
import {BooksSections} from "./components/SectionsUI/Sections";
import {Header} from "./components/HeaderUI/Header";
import {BackgroundBlock, BlockBook, DivLoading} from "./components/DivsUI/Divs";


function App() {
    return (
        <div className="App">
            <Header/>
            <BooksSections/>
            <BackgroundBlock/>
            <BlockBook/>
            <DivLoading/>
        </div>
    );
}

export default App;
