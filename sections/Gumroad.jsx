"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import styles from "../styles";
import { gumroad } from "../constants";
import { staggerContainer } from "../utils/motion";
import { GumroadCard, TitleText, TypingText } from "../components";
import { textVariant2 } from "../utils/motion";

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
      <div className="flex items-center justify-center sm:gap-0">
        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className={`mt-[8px] font-bold md:text-[64px] text-[26px] text-white text-center`}
        >
          Checkout my{" "}
          <a
            data-type="product"
            className="interactable transition ease-in-out text-gray-200 underline  duration-300"
            href="https://polyfjord.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gumroad
          </a>
        </motion.h2>
        <img
          src="/gumroad.svg"
          alt="patreon"
          className="relative w-[50px] h-[50px] top-[0.3rem] sm:w-[100px] sm:h-[100px] sm:top-[0.5rem]"
        />
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.5)}
        className="mt-[50px] grid grid-cols-1 sm:grid-cols-3 gap-[30px]"
      >
        {gumroad.map((item, index) => (
          <GumroadCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Gumroad;
