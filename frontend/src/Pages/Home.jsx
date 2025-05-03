import React, {useEffect} from 'react'
import HeroSection from "../Components/Home/HeroSection";
import Header from '../Components/Header';
import TopQuizes from '../Components/Home/TopQuizes';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <TopQuizes />
        </div>
    )
}
export default Home
