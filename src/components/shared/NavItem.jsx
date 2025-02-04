import React from "react";
import { motion } from "framer-motion";

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const NavItem = ({ href, text }) => (
  <motion.a
    variants={itemMotion}
    href={href}
    className="duration-300 font-medium ease-linear hover:text-primary py-3 text-black dark:text-white"
  >
    {text}
  </motion.a>
);

export default NavItem;
