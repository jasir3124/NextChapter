import React, {useEffect} from 'react'
import HeroSection from "../Components/Home/HeroSection";
import Header from '../Components/Header';
import UnderHero from "../Components/Home/UnderHero";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <UnderHero />
        </div>
    )
}
export default Home
