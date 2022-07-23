import React from "react";
import { motion } from "framer-motion";

function FloatingImages() {
  return (
    <div className="relative min-h-[420px]">
      <motion.div
        animate={{
          transition: { yoyo: Infinity, duration: 3 },
          x: 5,
          rotate: 13,
          y: -10,
        }}
        className="absolute top-[15px] left-[120px] md:left-[180px] flex p-2 border rounded-full bg-[white] drop-shadow-lg w-[250px] h-[250px]"
      >
        <img
          src="https://gitlab.com/uploads/-/system/user/avatar/6049371/avatar.png"
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        animate={{
          transition: { yoyo: Infinity, duration: 3 },
          x: 15,
          rotate: -5,
          y: 26,
        }}
        className="absolute top-[250px] left-[30px] flex p-2 border rounded-full bg-[white] drop-shadow-lg  w-[150px] h-[150px]"
      >
        <img
          src="https://gitlab.com/uploads/-/system/user/avatar/6049371/avatar.png"
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        animate={{
          transition: { yoyo: Infinity, duration: 3 },
          x: 36,
          rotate: 22,
          y: -10,
        }}
        className="absolute top-[-20px] left-[15px] flex p-2 border rounded-full bg-[white] drop-shadow-lg w-[100px] h-[100px]"
      >
        <img
          src="https://gitlab.com/uploads/-/system/user/avatar/6049371/avatar.png"
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
}

export default FloatingImages;
