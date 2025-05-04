// import React from 'react';
//
// const sectionHeader = "text-2xl font-semibold mb-6 text-darkBrown";
// const highlightCard = "p-6 border-2 border-primary/20 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300";
// const bulletList = "list-disc pl-6 space-y-4 text-darkGray";
//
// const AboutUs = () => {
//   return (
//     <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
//       {/* Hero Section */}
//       <section aria-labelledby="who-we-are" className="mb-16">
//   <div className="relative bg-white rounded-2xl shadow-xl p-8 border-l-8 border-primary">
//     <div className="max-w-4xl mx-auto">
//       <div className="flex flex-col md:flex-row gap-8 items-start">
//         {/* Left Decorative Section */}
//         <div className="md:w-1/3 space-y-4">
//           <div className="text-6xl mb-4">🌟</div>
//           <h1
//             id="who-we-are"
//             className="text-3xl font-bold text-darkBrown border-b-4 border-primary pb-2"
//           >
//             Your Academic Compass
//           </h1>
//           <div className="hidden md:block text-4xl mt-4">🧭</div>
//         </div>
//
//         {/* Right Content */}
//         <div className="md:w-2/3 space-y-6">
//           <p className="text-lg text-darkGray leading-relaxed">
//             At <strong className="text-primary">NEXT CHAPTER</strong>, we're revolutionizing how Albanian students navigate their educational journey. Imagine having a personal guide through the world of:
//           </p>
//
//           <div className="grid grid-cols-2 gap-4">
//             <div className="p-4 bg-primary/5 rounded-lg">
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="text-2xl">📚</span>
//                 <h3 className="font-semibold text-darkBrown">Academics</h3>
//               </div>
//               <p className="text-sm text-darkGray/90">
//                 Discover programs that match your passions
//               </p>
//             </div>
//
//             <div className="p-4 bg-primary/5 rounded-lg">
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="text-2xl">🗺️</span>
//                 <h3 className="font-semibold text-darkBrown">Career Paths</h3>
//               </div>
//               <p className="text-sm text-darkGray/90">
//                 Visualize your future with clear roadmaps
//               </p>
//             </div>
//           </div>
//
//           <div className="bg-darkBrown/90 text-white p-4 rounded-lg">
//             <p className="flex items-center gap-2 text-sm">
//               <span className="text-primary text-xl">💡</span>
//               We combine smart technology with human insight to create your perfect education blueprint
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//
//       {/* What We Offer Section */}
//       <section aria-labelledby="what-we-offer" className="mb-16">
//         <h2 id="what-we-offer" className={sectionHeader}>
//           Your Adventure Toolkit 🧰
//         </h2>
//         <ul className={`${bulletList} space-y-6`}>
//           {[
//             {emoji: '🎯', title: 'Smart Matching', content: 'Personalized recommendations that feel like magic'},
//             {emoji: '🕹️', title: 'Gamified Exploration', content: 'Quizzes & challenges that make learning fun'},
//             {emoji: '🏫', title: 'Virtual Campus Tours', content: 'Explore universities like a superhero with X-ray vision'},
//             {emoji: '📰', title: 'Personalized Content', content: 'Tailored advice that feels like it reads your mind'},
//             {emoji: '💬', title: 'Real Conversations', content: 'Chat with students who spill the campus tea ☕'},
//           ].map((item, index) => (
//             <li key={index} className="pl-3 flex items-start gap-3 group">
//               <span className="text-2xl">{item.emoji}</span>
//               <div>
//                 <strong className="text-primary">{item.title}:</strong> {item.content}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>
//
//       {/* Platform Highlights */}
//       <section aria-labelledby="platform-highlights" className="mb-16">
//         <h2 id="platform-highlights" className={sectionHeader}>
//           Superpowers You Get 🦸
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {[
//             {emoji: '📊', title: 'Interactive Dashboard', content: 'Your mission control center'},
//             {emoji: '🧭', title: 'Career Pathways Explorer', content: 'See your future in 3D'},
//             {emoji: '👪', title: 'Parent Portal', content: 'Team up with your sidekicks'},
//             {emoji: '📅', title: 'Event Calendar', content: 'Never miss an epic adventure'},
//           ].map((item, index) => (
//             <div key={index} className={`${highlightCard} relative overflow-hidden`}>
//               <div className="absolute -top-4 -right-4 text-6xl opacity-20">
//                 {item.emoji}
//               </div>
//               <h3 className="text-lg font-semibold mb-3 text-darkBrown">
//                 {item.emoji} {item.title}
//               </h3>
//               <p className="text-darkGray/90 leading-relaxed">
//                 {item.content}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//
//       {/* Vision Section */}
//       <section className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
//         <div className="absolute w-32 h-32 bg-primary/20 rounded-full -top-16 -left-16" />
//         <div className="absolute w-48 h-48 bg-primary/15 rounded-full -bottom-24 -right-24" />
//         <h2 className={sectionHeader}>
//           Our Big Dream 🌟
//         </h2>
//         <p className="text-lg leading-relaxed text-darkGray/90 relative z-10">
//           We're on a quest to build Albania's most awesome academic adventure map!
//           <span className="mx-2"></span>
//           Our magic spell? Turning "Hmm..." into "Aha!" moments for every student.
//         </p>
//       </section>
//
//       {/* CTA Section */}
//       <section className="mt-16 bg-gradient-to-br from-primary to-[#FFD700] p-8 rounded-2xl text-center shadow-xl">
//         <div className="max-w-2xl mx-auto relative">
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl">
//
//           </div>
//           <h3 className="text-2xl font-semibold mb-4 text-white">
//             Ready for Your Adventure?
//           </h3>
//           <p className="mb-6 text-white/95 leading-relaxed">
//             Let's turn those "What ifs" into "What's next!" - your journey starts now!
//           </p>
//           <button className="bg-white hover:bg-gray-50 text-darkBrown font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto">
//             <span className="text-xl">🚀</span>
//             Launch My Journey!
//             <span className="text-xl"></span>
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// };
//
// export default AboutUs;


import React from 'react';
import {Link} from "react-router-dom";

const sectionHeader = "text-2xl font-semibold mb-6 text-darkBrown";
const bulletList = "list-disc pl-6 space-y-4 text-darkGray";
const highlightCard = "p-6 border border-primary/30 rounded-xl bg-white shadow-sm hover:shadow-md transition duration-300";

const AboutUs = () => {
  return (
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
          <ul className={`${bulletList} space-y-4`}>
            {[
              { emoji: '📝', title: 'Interactive Quiz', content: 'We ask the right questions to uncover your interests and strengths.' },
              { emoji: '📊', title: 'Smart Matching', content: 'We recommend university programs that best match your profile.' },
              { emoji: '🔍', title: 'Program Explorer', content: 'Learn about university programs at a glance.' }
            ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <strong className="text-primary">{item.title}:</strong> {item.content}
                  </div>
                </li>
            ))}
          </ul>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className={sectionHeader}>Why Students Love Us ❤️</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🎮', title: 'Gamified Experience', content: 'Progress bars, animations, and emoji-filled fun make discovery engaging.' },
              { emoji: '⚡', title: 'Instant Results', content: 'Get your top university matches right after the quiz.' },
              { emoji: '🌐', title: 'All in One Place', content: 'No more tabs — browse universities, quizzes, and results in one platform.' }
            ].map((item, index) => (
                <div key={index} className={highlightCard}>
                  <div className="flex items-center gap-2 mb-2 text-xl">
                    <span>{item.emoji}</span>
                    <h3 className="font-semibold text-darkBrown">{item.title}</h3>
                  </div>
                  <p className="text-sm text-darkGray">{item.content}</p>
                </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mb-16 p-8 rounded-2xl bg-primary/10 relative">
          <h2 className={sectionHeader}>Our Mission 🚀</h2>
          <p className="text-lg text-darkGray leading-relaxed">
            We want every student in Albania to feel confident about their academic future. With the right guidance, tools, and a little fun — you’ll know exactly where your next chapter begins.
          </p>
        </section>

            <div className="p-4 bg-primary/5 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🗺️</span>
                <h3 className="font-semibold text-darkBrown">Career Paths</h3>
              </div>
              <p className="text-sm text-darkGray/90">
                Visualize your future with clear roadmaps
              </p>
            </div>
          </div>

          <div className="bg-darkBrown/90 text-white p-4 rounded-lg">
            <p className="flex items-center gap-2 text-sm">
              <span className="text-primary text-xl">💡</span>
              We combine smart technology with human insight to create your perfect education blueprint
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* What We Offer Section */}
      <section aria-labelledby="what-we-offer" className="mb-16">
        <h2 id="what-we-offer" className={sectionHeader}>
          Your Adventure Toolkit 🧰
        </h2>
        <ul className={`${bulletList} space-y-6`}>
          {[
            {emoji: '🎯', title: 'Smart Matching', content: 'Personalized recommendations that feel like magic'},
            {emoji: '🕹️', title: 'Gamified Exploration', content: 'Quizzes & challenges that make learning fun'},
            {emoji: '🏫', title: 'Virtual Campus Tours', content: 'Explore universities like a superhero with X-ray vision'},
            {emoji: '📰', title: 'Personalized Content', content: 'Tailored advice that feels like it reads your mind'},
            {emoji: '💬', title: 'Real Conversations', content: 'Chat with students who spill the campus tea ☕'},
          ].map((item, index) => (
            <li key={index} className="pl-3 flex items-start gap-3 group">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <strong className="text-primary">{item.title}:</strong> {item.content}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Platform Highlights */}
      <section aria-labelledby="platform-highlights" className="mb-16">
        <h2 id="platform-highlights" className={sectionHeader}>
          Superpowers You Get 🦸
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {emoji: '📊', title: 'Interactive Dashboard', content: 'Your mission control center'},
            {emoji: '🧭', title: 'Career Pathways Explorer', content: 'See your future in 3D'},
            {emoji: '👪', title: 'Parent Portal', content: 'Team up with your sidekicks'},
            {emoji: '📅', title: 'Event Calendar', content: 'Never miss an epic adventure'},
          ].map((item, index) => (
            <div key={index} className={`${highlightCard} relative overflow-hidden`}>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20">
                {item.emoji}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-darkBrown">
                {item.emoji} {item.title}
              </h3>
              <p className="text-darkGray/90 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
        <div className="absolute w-32 h-32 bg-primary/20 rounded-full -top-16 -left-16" />
        <div className="absolute w-48 h-48 bg-primary/15 rounded-full -bottom-24 -right-24" />
        <h2 className={sectionHeader}>
          Our Big Dream 🌟
        </h2>
        <p className="text-lg leading-relaxed text-darkGray/90 relative z-10">
          We're on a quest to build Albania's most awesome academic adventure map! 
          <span className="mx-2"></span>
          Our magic spell? Turning "Hmm..." into "Aha!" moments for every student.
        </p>
      </section>

      {/* Discord */}
      <section className="mt-16 bg-gradient-to-br bg-indigo-700 p-8 rounded-2xl text-center shadow-xl">
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl">
            
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Want to talk?
          </h3>
          <p className="mb-6 text-white/95 leading-relaxed">
            Join our Discord Channel where you can meet, talk to and ask advice from other universities and high-schoolers 
          </p>
          <button>
            <a href='https://discord.gg/B9AdReR3' className="bg-white hover:bg-gray-50 text-indigo-700 font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto">
              <span className="text-xl"></span>
              Join Now!
              <span className="text-xl"></span>
            </a>
          </button>
        </div>
      </section>




      {/* CTA Section */}
      <section className="mt-16 bg-gradient-to-br from-primary to-[#FFD700] p-8 rounded-2xl text-center shadow-xl">
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl">
            
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Ready for Your Adventure?
          </h3>
          <p className="mb-6 text-white/95 leading-relaxed">
            Let's turn those "What ifs" into "What's next!" - your journey starts now!
          </p>
          <button className="bg-white hover:bg-gray-50 text-darkBrown font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto">
            <span className="text-xl">🚀</span>
            Launch My Journey!
            <span className="text-xl"></span>
          </button>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
