import React, {useEffect} from 'react'
import HeroSection from "../Components/Home/HeroSection";
import Header from '../Components/Header';
import TopQuizes from '../Components/Home/TopQuizes';
import Footer from '../Components/Home/Footer';
import QuizTips from '../Components/Home/QuizTips';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <TopQuizes />
            <QuizTips />
            <Footer />
        </div>
    )
}
export default Home
