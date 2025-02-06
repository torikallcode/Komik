import React from 'react';
import { Navbar } from '../fragments/Navbar';
import { HeroSection } from '../fragments/HeroSection';
import { CardChose } from '../elements/Card/CardChose';
import { useState } from 'react';
import { Footer } from '../fragments/Footer';
import { X } from 'lucide-react';
import { Crown } from 'lucide-react';
import { About } from '../fragments/About';

export const AuthLayouts = () => {
  const dataImage = [
    { id: 1, title: 'Echoes of You', likes: '7,6 jt', url: '/img/p1.png' },
    { id: 2, title: 'When Hearts Collide', likes: '3,1 jt', url: '/img/p2.png' },
    { id: 3, title: 'A Whisper Between Us', likes: '2,3 jt', url: '/img/p3-2.jpg' },
    { id: 4, title: 'Moonlit Promises', likes: '1,4 jt', url: '/img/p4.png' },
    { id: 5, title: 'Fragments of Forever', likes: '8,9 jt', url: '/img/p5.png' },
    { id: 6, title: 'Velvet Horizons', likes: '5,4 jt', url: '/img/p6.png' },
    { id: 7, title: 'Letters We Never Sent', likes: '1,7 jt', url: '/img/p7.png' },
    { id: 8, title: 'Beneath the Cherry Skies', likes: '3,6 jt', url: '/img/p8.png' },
    { id: 9, title: 'Tides of Longing', likes: '4,7 jt', url: '/img/p9.png' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [lirik, setLirik] = useState("");

  const handleLirikSubmit = (newLirik) => {
    setLirik(newLirik);
  };

  return (
    <div>
      <Navbar classname="z-50" />
      <HeroSection />
      <div className="flex items-center justify-center w-full h-full px-5 py-5 border-b border-gray-200">
        <h1 className="text-2xl font-semibold xl:text-3xl font-sacramento">My Queen</h1>
      </div>
      <div className="flex items-center flex-col justify-center w-full bg-[#f4f4f4]">
        <div className="grid w-full h-full max-w-6xl grid-cols-2 gap-3 px-5 py-3 mx-auto sm:gap-5 lg:gap-3 lg:grid-cols-5">
          {dataImage.map((items, index) => {
            if (items === null || items === undefined) {
              return <></>;
            }
            return (
              <CardChose
                key={items.id}
                title={items.title}
                likes={items.likes}
                likesClassName={index === 2 ? 'text-white' : 'text-primary'}
                url={items.url}
                className={index === 2 ? 'col-span-2 aspect-[2/1] lg:aspect-auto bg-black' : ''}
                titleClassName={index === 2 ? 'font-bold text-white' : ''} // Added this line for different title color
              />
            );
          })}
        </div>
        {/* Rest of the component remains the same */}
        <div className="flex items-center text-center justify-center w-full h-full max-w-4xl p-5 bg-gradient-to-br from-[#00ff95] to-primary mb-5">
          <h1 className="text-2xl text-white font-Semibold font-comic ">Happy Birthday!</h1>
        </div>
        <div className='grid w-full max-w-5xl grid-cols-2 gap-3 p-5 mb-5 md:grid-cols-3 h-96'>
          <div className='w-full col-span-2 row-span-3 bg-center bg-cover md:row-span-2 bg-sky-500 ' style={{ backgroundImage: `url('/img/p3-2.jpg')` }}>

          </div>
          <div className='grid content-between w-full h-full p-3 bg-gradient-to-br from-[#00ff95] to-primary relative'>
            <span className='absolute z-10 w-full h-full bg-black opacity-30'></span>
            <h1 className='z-20 text-xl font-medium text-white'>Kerajaan</h1>
            <p className='z-20 text-white'>Kisah romantis di kerajaan yang bikin deg-degan</p>
          </div>
          <div className='grid content-between w-full h-full p-3 bg-gradient-to-br from-[#00ff95] to-primary relative'>
            <span className='absolute z-10 w-full h-full bg-black opacity-30'></span>
            <h1 className='z-20 text-xl font-medium text-white'>Kerajaan</h1>
            <p className='z-20 text-white'>Kisah romantis di kerajaan yang bikin deg-degan</p>
          </div>
          {/* <About /> */}
        </div>
        <Footer />
        <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-8">
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-full max-w-2xl mx-4 bg-white rounded-lg">
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-xl font-semibold">For you</h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="p-6">
                  {/* Added circular image container */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 overflow-hidden border-4 rounded-full">
                      <img
                        src="/img/ls1.jpeg"
                        alt="Profile"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="p-8 text-center bg-gray-100 rounded-lg">
                    <p className="mb-4 text-lg italic text-gray-700">
                      "Every beat of my heart sings for you, every breath I pray for you, and every step I dance for you. Happy birthday, my dear!"
                      <br />
                      ♥♥♥
                    </p>
                    <p className="text-sm text-gray-500">Chapter 1: Boundless for You</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="relative inline-block">
        <div className="fixed text-yellow-500 -translate-x-1/2 bottom-[80px] right-9 animate-bounce">
          <Crown fill="currentColor" className="w-9 h-9" />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="fixed px-4 py-4 text-white rounded-full shadow-sm bg-primary hover:bg-green-500 bottom-5 right-5"
        >
          <h1 className='text-sm leading-tight font-comic'>Read <br /> Now</h1>
        </button>
      </div>
    </div >
  );
};