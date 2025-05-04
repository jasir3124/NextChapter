import React from 'react'
import HeroSection from "../Components/Home/HeroSection";
import Quiz from './Quiz';
import Header from '../Components/Header';
import {Link} from "react-router-dom";

const sectionHeader = "text-2xl font-semibold mb-6 text-darkBrown";
const bulletList = "list-disc pl-6 space-y-4 text-darkGray";

const About = () => {
    return (
        <div>
            <Header />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                {/* Hero Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-primary">
                        <div className="flex flex-col md:flex-row gap-10 items-start">
                            {/* Icon/Visual */}
                            <div className="md:w-1/3 text-center md:text-left">
                                <div className="text-5xl mb-4">🎓</div>
                                <h1 className="text-3xl font-bold text-darkBrown border-b-4 border-primary pb-2">
                                    Meet NextChapter
                                </h1>
                            </div>

                            {/* Description */}
                            <div className="md:w-2/3 space-y-4">
                                <p className="text-lg text-darkGray leading-relaxed">
                                    <strong className="text-primary">NextChapter</strong> helps Albanian high school students discover their ideal university programs through fun quizzes and smart recommendations. No more endless searching — we simplify your academic journey.
                                </p>

                                <div className="bg-darkBrown/90 text-white p-4 rounded-lg text-sm">
                                    <span className="text-primary text-xl mr-2">💡</span>
                                    Smart, friendly, and designed for you — our platform turns curiosity into clarity.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Do */}
                <section className="mb-16">
                    <h2 className={sectionHeader}>What We Do 🎯</h2>
                    <div className="space-y-6 text-lg text-darkGray">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">📝</span>
                            <div>
                                <strong className="text-primary">Interactive Quiz:</strong>
                                <p>We ask the right questions to uncover your interests and strengths.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">📊</span>
                            <div>
                                <strong className="text-primary">Smart Matching:</strong>
                                <p>We recommend university programs that best match your profile.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">🔍</span>
                            <div>
                                <strong className="text-primary">Program Explorer:</strong>
                                <p>Learn about university programs at a glance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Students Love Us */}
                <section className="mb-16">
                    <h2 className={sectionHeader}>Why Students Love Us ❤️</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">🎮</span>
                            <div>
                                <h3 className="font-semibold text-darkBrown">Gamified Experience</h3>
                                <p className="text-sm text-darkGray">Progress bars, animations, and emoji-filled fun make discovery engaging.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">⚡</span>
                            <div>
                                <h3 className="font-semibold text-darkBrown">Instant Results</h3>
                                <p className="text-sm text-darkGray">Get your top university matches right after the quiz.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">🌐</span>
                            <div>
                                <h3 className="font-semibold text-darkBrown">All in One Place</h3>
                                <p className="text-sm text-darkGray">No more tabs — browse universities, quizzes, and results in one platform.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision */}
                <section className="mb-16 p-8 rounded-2xl bg-primary/10 relative">
                    <h2 className={sectionHeader}>Our Mission 🚀</h2>
                    <p className="text-lg text-darkGray leading-relaxed">
                        We want every student in Albania to feel confident about their academic future. With the right guidance, tools, and a little fun — you’ll know exactly where your next chapter begins.
                    </p>
                </section>

                {/* CTA - Updated layout without cards */}
                <section className="mt-16 bg-gradient-to-br from-primary to-[#FFD700] p-8 rounded-2xl text-center shadow-xl">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Start Your Journey</h3>
                    <p className="mb-6 text-white/90 text-sm">
                        Discover your strengths, match with universities, and step into your future.
                    </p>
                    <Link to={"/quiz"} className="bg-white text-darkBrown font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300">
                        🎓 Start your journey
                    </Link>
                </section>

                {/* Discord Section - Simplified layout */}
                <section className="mt-16 bg-gradient-to-br bg-indigo-700 p-8 rounded-2xl text-center shadow-xl">
                    <div className="max-w-2xl mx-auto relative">
                        {/* Icon/Visual for Discord */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl">
                            {/* Optional Icon/Emoji */}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                            Want to talk?
                        </h3>
                        <p className="mb-6 text-white/95 leading-relaxed">
                            Join our Discord Channel where you can meet, talk to and ask advice from other universities and high-schoolers.
                        </p>
                        <a href='https://discord.gg/B9AdReR3' className="bg-white hover:bg-gray-50 text-indigo-700 font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto">
                            Join Now!
                        </a>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default About;
