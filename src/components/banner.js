import React from 'react'
import {ReactComponent as RightArrow } from "../assets/arrow-right.svg"

const Banner = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Making Stuff Out Of</span>
                        </div>
                        <div className="line">
                            <span>Sheer Curiosity.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="https://thelaserunicorn.github.io/about">About Me<RightArrow /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
