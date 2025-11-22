"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function SkillsProjectsTabs({ tabs }) {
  const [active, setActive] = useState("skills");

  return (
    <TabsList className="max-w-[250px] h-fit grid grid-cols-2 mx-auto mb-5 p-2 bg-muted rounded-md">
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <TabsTrigger
            key={tab}
            value={tab}
            onClick={() => setActive(tab)}
            className={`font-bold capitalize py-3 px-6 transition-colors duration-200
                ${isActive ? "text-foreground" : "text-muted-foreground"}`}
          >
            {tab}
          </TabsTrigger>
        );
      })}
    </TabsList>
  );
}
