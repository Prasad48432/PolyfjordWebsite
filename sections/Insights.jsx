'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Patreon" textStyles="text-center" />
      <div className='flex items-center justify-center gap-3 sm:gap-6' >
      <TitleText title={<>Support me on Patreon</>} textStyles="text-center" />
      <img src='/patreon.svg' alt="patreon" className= 'relative w-[30px] h-[30px] top-2 sm:w-[50px] sm:h-[50px] sm:top-3'/>
      </div>
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
