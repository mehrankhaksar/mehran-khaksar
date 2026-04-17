"use client";

import { RiDownloadLine } from "@remixicon/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "motion/react";

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
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function CertificationListClient({ certifications }) {
  return (
    <motion.ul
      variants={list}
      initial="hidden"
      animate="show"
      className="w-[300px] sm:w-[350px] space-y-2.5"
    >
      {certifications.map((certification) => {
        const hasMedia = Boolean(certification?.media?.url);

        return (
          <motion.li variants={item} key={certification.id}>
            <Card>
              <CardHeader className="p-3">
                <CardTitle className="text-base">
                  {certification.title}
                </CardTitle>

                <div className="text-sm flex items-center justify-between gap-2.5">
                  <span className="font-semibold text-primary flex-1 truncate">
                    {certification.issuer}
                  </span>
                  {certification.issueDate}
                </div>
              </CardHeader>

              <CardContent className="p-3 space-y-3">
                <p className="text-sm">
                  Credential ID:{" "}
                  <span className="underline text-muted-foreground">
                    {certification.credentialId}
                  </span>
                </p>

                <ul className="flex flex-wrap gap-0.5">
                  {certification.skills?.map((skill) => (
                    <li key={`${certification.id}-${skill.id}`}>
                      <Badge variant="outline">{skill.name}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {hasMedia && (
                <CardFooter className="p-3">
                  <a
                    className="w-full"
                    href={certification.media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full"
                      type="button"
                      variant="secondary"
                      size="sm"
                    >
                      Download
                      <RiDownloadLine />
                    </Button>
                  </a>
                </CardFooter>
              )}
            </Card>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
