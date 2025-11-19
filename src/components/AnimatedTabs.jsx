"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedTabs({ tabs }) {
  const [active, setActive] = useState("skills");

  return (
    <TabsList className="max-w-[250px] h-fit grid grid-cols-2 mx-auto mb-5 p-2 bg-muted rounded-md">
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <div key={tab} className="relative">
            {isActive && (
              <motion.div
                layoutId="tab-background"
                className="absolute inset-0 bg-background rounded"
                transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}
              />
            )}
            <TabsTrigger
              value={tab}
              onClick={() => setActive(tab)}
              className={`relative z-10 font-bold capitalize py-3 px-6 w-full
                transition-colors duration-200
                ${isActive ? "text-foreground" : "text-muted-foreground"}`}
            >
              {tab}
            </TabsTrigger>
          </div>
        );
      })}
    </TabsList>
  );
}
