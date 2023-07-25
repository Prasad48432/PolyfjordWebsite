'use client';
import { GrLocation } from "react-icons/gr";

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <>
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 data-type="digitalartist" variants={textVariant(1.1)} className={`${styles.heroHeading} interactable cursor-pointer`}>
            Digital ARTIST
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <img
              src="/location.svg"
              alt="/"
              className="w-[40px] sm:w-[100px] mr-2 interactable"
              data-type="norway"
            />
            <h1 className={`${styles.heroHeading} cursor-pointer`}><span className="interactable" data-type="norway">N</span><span className="interactable" data-type="norway2">O</span><span className="interactable" data-type="norway3">R</span><span className="interactable" data-type="norway4">W</span><span className="interactable" data-type="norway5">A</span><span className="interactable" data-type="norway6">Y</span></h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[160px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[0px] sm:left-[6rem]" />

          <img
            src="/main_home.jpg"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative sm:left-[6rem]"
          />
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 ">
            <a
              href="https://youtube.com/@polyfjord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                data-type="youtube"
                src="/polyfjord_stamp.png"
                alt="stamp"
                className="interactable sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain rounded-full border-solid border-white border-4 rotate_img"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  </>
);

export default Hero;
