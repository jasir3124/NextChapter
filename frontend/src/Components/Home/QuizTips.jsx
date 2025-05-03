import React from "react";

const QuizTips = () => {
    const tips = [
        "📖 Read the question carefully before answering — sometimes key details are subtle.",
        "🧠 Eliminate clearly wrong options to boost your chances.",
        "🔁 Don’t worry if you get one wrong — most quizzes are repeatable!",
        "⏱️ Manage your time: don’t get stuck too long on a single question.",
        "💡 Trust your first instinct — it's often correct!"
    ];

    return (
        <section className="mt-28 mb-20 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-bold text-darkBrown mb-16">
                Quick Tips
            </h2>
            <ul className="space-y-8 text-xl leading-relaxed text-gray-800">
                {tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                ))}
            </ul>
        </section>
    );
};

export default QuizTips;
