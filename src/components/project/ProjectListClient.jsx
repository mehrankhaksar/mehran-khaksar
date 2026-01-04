"use client";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ProjectListClient({ projectList = [] }) {
  return (
    <section>
      <motion.div
        variants={list}
        initial="hidden"
        animate="show"
        className="max-w-xl mx-auto grid xs:grid-cols-2 gap-2.5"
      >
        {projectList.map((projectItem) => (
          <ProjectItem {...projectItem} key={projectItem.id} />
        ))}
      </motion.div>
    </section>
  );
}
