import React from 'react';
import Header from '../Components/Header';

const Campuses = () => {
  return (
    <>
      <Header />
      <div className="p-4 bg-yellow-400 min-h-screen">
        <h1 className="text-5xl font-bold text-center text-white mt-8 mb-8">Campuses</h1>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-2">Oxford University</h2>
          <p className="text-lg text-white mb-4">
            Explore Oxford University in immersive 360° Street View.
          </p>
          <div className="w-full h-[700px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1746289805880!6m8!1m7!1sOhZqNKPSj6a5jpm6RMHz9g!2m2!1d51.75500568888729!2d-1.256970058349765!3f357.51957904466514!4f14.397486509150113!5f0.7820865974627469"
              className="w-full h-full border-0 rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campuses;
    