'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { navVariants } from '../utils/motion';

const GetStarted = () => (
  <>
    <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
  </motion.div>
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/Mech_Thumbnail.jpg"
          alt="get-started"
          className="rounded-[20px] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| My New Releases" />
        <TitleText title={<>The Mechanical Creature Kit</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <a target="_blank" href={feature.link} rel="noopener noreferrer">
              <StartSteps
                key={feature.id}
                number={feature.price}
                text={feature.title}
                subtext={feature.subtext}
              />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
    <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <a
      target="_blank"
      href="https://blendermarket.com/products/mechanical-creature-kit"
      rel="noopener noreferrer"
    >
      <div className="sm:w-[55%] rounded-[10px] glassmorphism flex sm:ml-[-50px]np justify-center items-center sm:bottom-[5rem] relative">
        <h1 className="text-white p-3 capitalize">checkout product</h1>
        <img src="/arrow.svg" alt="/" />
      </div>
    </a>
    </motion.div>

  </section>
  </>
);

export default GetStarted;
