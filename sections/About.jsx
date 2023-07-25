"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Polyfjord" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* Somewhere in Norway, a tiny animation studio is creating tutorials about 3D art,
         workflows and visual concepts. If you want to support this journey, please feel 
         free to check out the Polyfjord® Viewport Community on Patreon! */}
        Somewhere in<span data-type="norwegian" className="font-extrabold text-white interactable"> Norway</span>,
        a tiny animation studio is creating tutorials about
        <span data-type="arted" className="font-extrabold text-white interactable"> 3D art</span>
        <span data-type="arted" className="font-extrabold text-white interactable">workflows</span> and{" "}
        <span data-type="arted" className="font-extrabold text-white interactable">visual concepts</span>. If
        you want to support this journey, please feel free to check out the{" "}
        <a
          href="https://www.patreon.com/polyfjord"
          data-type="patreon"
          className="underline text-white font-bold interactable"
        >
          Polyfjord Viewport Community on Patreon
        </a>
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
