import React from "react";
import Body from "./body/home";
import Navigation from "./header/navigation";
import Footer from "./body/Footer";

export default function MainComponent() {
    return (
        <div className="container-lg">
            <Navigation/>
            <Body/>
            <Footer/>
        </div>
    )
}