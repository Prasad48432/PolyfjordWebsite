'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreVideos } from '../constants';
import { staggerContainer } from '../utils/motion';
import { YouTubeCard, TitleText, TypingText } from '../components';

const Youtube = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Popular Tutorials" textStyles="text-center" />
        <TitleText
          title={<>Some of my<br className="md:block hidden" />Popular Tutorials</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreVideos.map((world, index) => (
            <YouTubeCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        <a className='text-center p-3 mt-10 text-white text-xl' target="_blank" href="https://www.youtube.com/@Polyfjord/videos" rel="noopener noreferrer" >Watch all Tutorials  ➡</a>
      </motion.div>
    </section>
  );
};

export default Youtube;