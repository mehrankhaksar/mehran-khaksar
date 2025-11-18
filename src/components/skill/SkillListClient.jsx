"use client";

import { motion } from "framer-motion";
import { RiCheckboxCircleLine } from "@remixicon/react";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function SkillListClient({ skills }) {
  return (
    <motion.div
      variants={list}
      initial="hidden"
      animate="show"
      className="max-w-xl grid grid-cols-2 sm:grid-cols-3 gap-2.5 mx-auto"
    >
      {skills.map((skill) => (
        <motion.div key={skill.id} className="flex gap-1.5" variants={item}>
          <RiCheckboxCircleLine className="text-primary shrink-0" />
          <div>
            <h4 className="h4 !leading-5">{skill.name}</h4>
            <span className="text-sm font-semibold text-muted-foreground">
              {skill.level}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
