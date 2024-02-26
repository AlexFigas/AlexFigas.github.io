import React from "react";
import "./home.css";

import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

// TODO: Change avatar to my own
import Me from "../../assets/avatar-3.svg";

function Home() {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Alexandre Figueiredo</h1>
                <span className="home__education">I'm a Software Engineer</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Contact Me</a>
                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home;