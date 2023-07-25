"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} 
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-1 lg:max-w-[650px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4  data-type="headhappy" className="cursor-pointer font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white z-50 interactable">
            Asbjørn
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder Polyfjord®
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[16px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-gray-300">
          If you enjoy a <b data-type="norwegian" className="text-white interactable cursor-pointer">Norwegian</b> accent and
          various<b data-type="arted" className="text-white interactable"> 3D workflows</b>, you've come to the
          right place !! My pipeline currently consists mainly these {" "}softwares
          <b data-type="blender" className="text-white interactable cursor-pointer"> Blender</b>,
          <b data-type="davinciresolve" className="text-white interactable cursor-pointer"> DaVinciResolve</b> and{" "}
          <b data-type="soundly" className="text-white interactable cursor-pointer"> Soundly</b>, and I enjoy exploring
          workflows that use open source, free and/or premium software. Since
          the summer of 2021 I've been making blender tutorials on YouTube
          full-time, which has become my dream job! If you want to support my
          work, please check out my
          <a
            target="_blank"
            href="https://www.patreon.com/polyfjord"
            rel="noopener noreferrer"
            className="interactable"
            data-type="patreon"
          >
            <b className="text-white hover:underline cursor-pointer">
              {" "}
              Patreon{" "}
            </b>
          </a>
          where you can also get access to a growing library of project files
          that contains a variety of techniques I am excited about. If you are
          looking for a welcoming community of fellow 3D artists, nerds and
          creators, please feel free to join the{" "}
          <a
            target="_blank"
            href="https://discord.com/invite/polyfjord"
            rel="noopener noreferrer"
            data-type="discord"
            className="interactable"
          >
            <b className="text-white hover:underline cursor-pointer">
              Polyfjord Viewport Community on Discord
            </b>
          </a>
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/caustics.gif"
          alt="caustics"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="absolute -left-[10%] top-[3%]"
        >
          <img
            className="rounded-full border-solid border-white border-2 p-1 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] relative bottom-[58rem] sm:bottom-0 left-[18rem] sm:left-[-8rem]"
            src="/asborjn.png"
            alt="Extra large avatar"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
