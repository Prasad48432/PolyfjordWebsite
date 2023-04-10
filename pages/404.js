import React from 'react';
import styles from '../styles';

const errorpage = () => (
  <div className="bg-primary-black overflow-hidden h-[100vh]">
    <div className={`${styles.xPaddings} py-8 relative`}>
      <div className="absolute w-[100%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} flex items-center justify-center`}>
        <img
          src="/polyfjord.png"
          alt="search"
          className="w-[48px] h-[48px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          Polyfjord®
        </h2>
      </div>
    </div>
    <div className="justify-center items-center flex flex-col overflow-hidden">
      <img src="/error_img.png" alt="error" className="w-1/2 h-1/2 z-50" />
      <a className="text-center p-5 mt-10 text-white text-xl" href="/">
        ← Back to Home
      </a>
    </div>
  </div>
);

export default errorpage;
