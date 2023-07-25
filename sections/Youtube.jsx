"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreVideos } from "../constants";
import { staggerContainer, textVariant2 } from "../utils/motion";
import { YouTubeCard, TitleText, TypingText } from "../components";

const Youtube = () => {
  const [active, setActive] = useState("world-2");

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
        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className={
            "mt-[8px] font-bold md:text-[64px] text-[26px] text-white text-center"
          }
        >
          Some of my Popular Tutorials
        </motion.h2>
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
        <a
          data-type="youtube"
          className="text-center p-3 mt-10 text-white text-xl interactable"
          target="_blank"
          href="https://www.youtube.com/@Polyfjord/videos"
          rel="noopener noreferrer"
        >
          Watch all Tutorials ➡
        </a>
      </motion.div>
    </section>
  );
};

export default Youtube;
