import React from 'react'
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <div className={"bg-primary h-96 p-10"}>
            <h1 className={"text-white font-bold text-8xl"}>Your future starts here. <br /> Discover it.</h1>
            <p className={"text-white text-2xl mt-10"}><Link className={"text-darkBrown font-bold"} to={"/quiz"}>Take a quick quiz </Link> and get matched with universities that fit your interests and style.</p>
        </div>
    )
}
export default HeroSection