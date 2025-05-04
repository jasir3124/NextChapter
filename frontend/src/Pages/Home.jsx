import React, {useEffect} from 'react'
import HeroSection from "../Components/Home/HeroSection";
import Header from '../Components/Header';
import HowItWorks from '../Components/Home/HowItWorks';
import Footer from '../Components/Home/Footer';
import WhyChooseUs from '../Components/Home/WhyChooseUs';
import LastSection from "../Components/Home/LastSection";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <HowItWorks />
            <WhyChooseUs />
            <LastSection />
            <Footer />
        </div>
    )
}
export default Home
