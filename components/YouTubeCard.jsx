'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const YouTubeCard = ({
  id,
  imgUrl,
  title,
  index,
  link,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.3, 0.2)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[10px] sm:rounded-[14px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[15px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div
        className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[10px] sm:rounded-b-[14px]"
      >
        <a target="_blank" href={link} rel="noopener noreferrer">
          <div
            data-type="youtube"
            className={`${styles.flexCenter}  h-[40px] w-[100px] sm:w-[140px] sm:h-[60px] rounded-[10px] sm:rounded-[24px] glassmorphism mb-[16px] interactable`}
          >
            <img
              src="/youtube_s.svg"
              alt="headset"
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] object-contain mr-4"
            />
            <img
              src="/arrow.svg"
              className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] object-contain"
              alt="arrow"
            />
          </div>
        </a>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Watch Video
        </p>
        <h2 className=" mt-[10px] font-semibold sm:text-[32px] text-[18px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default YouTubeCard;
