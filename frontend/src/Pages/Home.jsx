import React, {useEffect} from 'react'
import HeroSection from "../Components/Home/HeroSection";
import Quiz from './Quiz';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <Quiz 
                question="What is the capital of France?" 
                options={["Paris", "Berlin", "Madrid", "Rome"]} 
            />

        </div>
    )
}
export default Home
