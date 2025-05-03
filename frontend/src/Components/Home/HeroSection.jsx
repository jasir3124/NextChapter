import React from 'react'
import {Link} from "react-router-dom";
import Lottie from 'lottie-react';
import animationVid from "../../assets/Animation - 1746268939779.json"

const HeroSection = () => {
    return (
        <div className={"bg-primary h-96 p-10"}>
            <h1 className={"text-white font-bold text-8xl"}>Your future starts here. <br /> Discover it.</h1>
            <p className={"text-white text-2xl mt-10"}><Link className={"text-darkBrown font-bold"} to={"/quiz"}>Take a quick quiz </Link> and get matched with universities that fit your interests and style.</p>
            <Lottie animationData={animationVid} loop={true} style={{width: "100px", height: "100px"}} />
        </div>
    )
}
export default HeroSection