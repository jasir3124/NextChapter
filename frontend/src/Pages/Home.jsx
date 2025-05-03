import React, {useEffect} from 'react'
import HeroSection from "../Components/Home/HeroSection";
import Header from '../Components/Header';
import TopQuizes from '../Components/Home/TopQuizes';
import Footer from '../Components/Home/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <TopQuizes />
            <Footer />
        </div>
    )
}
export default Home
