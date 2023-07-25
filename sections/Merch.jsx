"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { gumroad } from "../constants";
import { staggerContainer } from "../utils/motion";
import { GumroadCard, TitleText, TypingText } from "../components";
import { textVariant2 } from "../utils/motion";

const Merch = () => {
  return (
    <>
      <section className={`${styles.paddings} relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <TypingText title="| Merch" textStyles="text-center" />
          <div className="flex items-center justify-center sm:gap-3 mb-[1rem] sm:mb-[4rem]">
            <motion.h2
              variants={textVariant2}
              initial="hidden"
              whileInView="show"
              className={`mt-[8px] font-bold md:text-[64px] text-[26px] text-white text-center`}
            >
              My{" "}
              <a
                data-type="merch"
                className="transition ease-in-out text-gray-200 underline  duration-300 interactable"
                href="https://polyfjord.threadless.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merch
              </a>
            </motion.h2>
            <img
              src="/tshirt.svg"
              alt="patreon"
              className="relative w-[30px] h-[30px] top-2 sm:w-[50px] sm:h-[50px] sm:top-3"
            />
          </div>

          <img
            src="/polyford_merch.png"
            alt="merch"
            className="rounded-[10px] sm:rounded-[30px] sm:h-[60vh] sm:object-contain"
          />
          <a
            target="_blank"
            href="https://polyfjord.threadless.com"
            rel="noopener noreferrer"
          >
            <div
              data-type="merch"
              className="sm:w-[70%] rounded-[10px] glassmorphism flex  justify-center items-center relative sm:ml-[190px] mt-3 sm:mt-5 interactable"
            >
              <h1 className="text-white p-3 capitalize">
                checkout merch on threadless.com
              </h1>
              <img src="/arrow.svg" alt="/" />
            </div>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Merch;
