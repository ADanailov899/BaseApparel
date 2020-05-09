import React from "react";
import Content from "./Content";
import girl from "../images/hero-desktop.jpg"
import MobileView from "./MobileView";

function App() {
    let width = window.innerWidth;

    if (width <= 600) {
        return <MobileView />;
    } else {
    return (
    <div className="container">
        <div className="content">
            <Content />
        </div>
        <div className="image">
            <img src={girl} alt="Girl" />
        </div>
    </div>
    );
    } 
}


export default App;