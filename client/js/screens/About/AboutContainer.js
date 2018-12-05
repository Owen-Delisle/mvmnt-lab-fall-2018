import React, { Component } from "react";
import About from "./About";

class AboutContainer extends Component {
    static navigationOptions = {
        title: "ABOUT",
        headerTitleStyle: {
            color: "white",
            fontSize: 24
        }
    };
    render() {
        return (
            <About/>
        )
    }
}

export default AboutContainer;