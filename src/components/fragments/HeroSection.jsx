import React from 'react';
import { SparkleGenerator } from '../elements/Sparkle/SparkleGenerator';
SparkleGenerator
export const HeroSection = () => (
  <div className="relative flex items-center justify-center h-screen lg:h-[500px] overflow-hidden bg-gray-900">
    <img
      src="/img/home_bg011.jpg"
      alt="Featured Comic"
      className="absolute object-cover w-full h-full opacity-500"
    />
    <SparkleGenerator />
    <div className="relative grid w-full h-full grid-cols-1 grid-rows-2 px-3 sm:px-10 lg:px-11 xl:px-3 gap-y-5 lg:max-w-6xl lg:gap-x-0 lg:grid-cols-3">
      <div
        className="col-span-1 mt-14 lg:mt-0 lg:col-span-2 lg:row-span-2 bg-[url('/img/gbr1-4.png')] bg-cover bg-center"
        style={{
          clipPath: window.innerWidth >= 1024 ? 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)' : '',
        }}
      ></div>
      <div className="flex items-center justify-center w-full lg:flex-col lg:row-span-2 lg:gap-y-3 xl:gap-y-4">
        <div
          className="relative self-start lg:self-center flex items-center lg:justify-center p-2 bg-primary h-[65%] lg:h-[75%] overflow-hidden -mr-[100px] sm:-mr-40 md:-mr-[200px] w-full lg:w-[350px] xl:w-[421px] lg:-ml-[295px] xl:-ml-[319px] lg:mt-[59px]"
          style={{
            clipPath: window.innerWidth >= 1024
              ? 'polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%)'
              : 'polygon(0% 0%, 50% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <img
            className="absolute bottom-0 left-0 object-contain scale-[2] xl:scale-[3] w-full h-[100%] opacity-25 rotate-45 max-w-full"
            src="/img/dotch2.png"
            alt=""
          />
          <h1 className="z-20 text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl lg:text-center font-comic">
            Happy <br /> Birthday!!!
          </h1>
        </div>
        <div
          className="bg-white h-[65%] lg:h-[75%] w-full p-2 lg:p-0 relative self-start lg:self-center lg:-ml-[59px] xl:-ml-[73px] lg:mb-[59px]"
          style={{
            clipPath: window.innerWidth >= 1024
              ? 'polygon(0% 0%, 100% 0%, 100% 100%, 11% 100%)'
              : 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%)',
          }}
        >
          <img
            className="absolute bottom-0 right-0 w-full object-contain scale-[3] sm:scale-[2] -mr-20 h-[100%] lg:relative lg:object-top lg:object-cover lg:scale-100 max-w-full"
            src="/img/gambar32.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);
