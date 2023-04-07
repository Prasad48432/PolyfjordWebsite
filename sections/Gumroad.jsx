'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import {gumroad } from '../constants';
import { staggerContainer } from '../utils/motion';
import { GumroadCard, TitleText, TypingText } from '../components';

const Gumroad = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Gumroad" textStyles="text-center" />
      <div className='flex items-center justify-center sm:gap-0' >
      <TitleText title={<>Checkout My Gumroad</>} textStyles="text-center" />
      <img src='/gumroad.svg' alt="patreon" className= 'relative w-[50px] h-[50px] top-[0.3rem] sm:w-[100px] sm:h-[100px] sm:top-[0.5rem]'/>
      </div>
      <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
        {gumroad.map((item, index) => (
          <GumroadCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Gumroad;