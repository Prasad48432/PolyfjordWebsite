"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {


  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="absolute w-[100%] inset-0 gradient-01" />
        <div
        data-type="head"
          className={`${styles.innerWidth} flex items-center justify-center interactable`}
        >
          <img
            src="/polyfjord.png"
            alt="search"
            className="w-[48px] h-[48px] object-contain"
          />
          <h2
            className="font-extrabold text-[24px] leading-[30.24px] text-white"
          >
            Polyfjord<span className="font-thin">®</span>
          </h2>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
