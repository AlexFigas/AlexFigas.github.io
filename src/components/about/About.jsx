import React from "react";
import "./about.css";

import Me from "../../assets/avatar-3.svg";

function About() {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Me} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia nec nisi semper pretium.
                            Donec malesuada, ex et placerat scelerisque, est dolor vestibulum purus, nec facilisis libero orci.
                        </p>
                        {/* TODO: Add href to CV here */}
                        <a href="." className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">C++</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage cpp"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Gaming</h3>
                                <span className="skills__number">30%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage gaming"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
