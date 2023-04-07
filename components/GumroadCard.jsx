'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const GumroadCard = ({ imgUrl, title, subtitle, link, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.5)}
    className="flex  flex-col items-center justify-center md:flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[16px] object-cover items-center justify-center"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 flex flex-col max-w-[650px]">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h4 className="font-normal lg:text-[30px] text-[26px] text-white text-center">
            {title}
          </h4>
        </a>
        <p className="mt-[16px] font-normal lg:text-[16px] sm:ml-[4rem] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
    </div>
  </motion.div>
);

export default GumroadCard;
