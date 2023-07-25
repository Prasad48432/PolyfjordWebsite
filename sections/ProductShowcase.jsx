"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { productFeatures } from "../constants";
import { ProductSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { navVariants } from "../utils/motion";
import { textVariant2 } from "../utils/motion";

const ProductShowcase = () => (
  <>
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    ></motion.div>
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[26px] text-white text-center`}
    >
      My new Releases
    </motion.h2>
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
            {productFeatures.map((feature, index) => (
              <a target="_blank" href={feature.link} rel="noopener noreferrer">
                <ProductSteps
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
          data-type="product"
          className="interactable"
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

export default ProductShowcase;
