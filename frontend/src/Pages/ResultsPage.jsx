import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Header from "../Components/Header";

// load your universities with tags
import universities from '../assets/data/universityList.json';

function calculateMatchScore(userTags, uniTags) {
    return userTags.reduce((sum, t) => sum + (uniTags.includes(t) ? 1 : 0), 0);
}

function matchUniversitiesExact(userTags, universities) {
    return universities
        .map((uni) => ({
            ...uni,
            score: calculateMatchScore(userTags, uni.tags)
        }))
        .filter((u) => u.score > 0)
        .sort((a, b) => b.score - a.score);
}

export default function ResultsPage() {
    const {state} = useLocation();
    const userTags = state?.userTags || [];
    const navigate = useNavigate();

    // if no tags, redirect back
    if (!userTags.length) {
        navigate(-1);
        return null;
    }

    // compute matches
    const recommendations = matchUniversitiesExact(userTags, universities).slice(0, 5);

    return (
        <>
            <Header />
            <div className="p-10">
                <h1 className="text-3xl font-bold mb-6">Your Top University Matches</h1>
                <ul className="space-y-6">
                    {recommendations.map((uni) => (
                        <li key={uni.id} className="border p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4 mb-2">
                            <img 
                                src={require(`../assets/UniLogos/${uni.filename}`)}
                                alt={uni.name}
                                className="w-16 h-16 object-contain rounded-md bg-white"
                            />
                            <div>
                                <h2 className="text-2xl font-semibold">{uni.name}</h2>
                                <p className="text-gray-600">Match score: {uni.score}</p>
                            </div>
                        </div>
                        <p className="text-gray-800">{uni.description}</p>
                        <p className="mt-2 text-sm text-gray-500">
                            <strong>Tags:</strong> {uni.tags.join(', ')}
                        </p>
                    </li>
                    
                    ))}
                </ul>
            </div>
        </>
    );
}
