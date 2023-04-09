import React from 'react';
import {motion} from 'framer-motion';
import {  textVariant2 } from '../utils/motion';

const EmbedVideo = () => {
  return (
    <>
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="font-bold md:text-[40px] text-[20px] text-white text-center p-5 mb-3 sm:mb-10"
      >
        Watch the introductory Video ↓
      </motion.h2>
      <div className="items-center justify-center flex p-3 sm:p-0">
        <iframe
          className="border-2 border-white p-3"
          width="853"
          height="480"
          src="https://www.youtube.com/embed/JSLgXXx-4A8"
          title="Introducing the Mechanical Creature Kit"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </>
  );
}

export default EmbedVideo