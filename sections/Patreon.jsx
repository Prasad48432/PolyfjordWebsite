"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import styles from "../styles";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";
import { PatreonCard, TypingText } from "../components";
import { textVariant2 } from "../utils/motion";

const Patreon = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Patreon" textStyles="text-center" />
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className={`mt-[8px] font-bold md:text-[64px] text-[26px] text-white text-center`}
        >
          Support me on{" "}
          <a
            className="transition ease-in-out text-gray-200 underline duration-300 interactable"
            data-type="patreon"
            href="https://patreon.com/polyfjord"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patreon
          </a>
        </motion.h2>
        <img
          src="/patreon.svg"
          alt="patreon"
          className="relative w-[30px] h-[30px] top-2 sm:w-[50px] sm:h-[50px] sm:top-3"
        />
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.5)}
        className="mt-[50px] grid grid-cols-1 sm:grid-cols-3 gap-[30px]"
      >
        {insights.map((item, index) => (
          <PatreonCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Patreon;
