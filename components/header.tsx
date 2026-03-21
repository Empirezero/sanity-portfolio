"use client";

import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <header className="sticky top-0 flex items-center justify-between mx-auto max-w-6xl p-5 z-20 xl:items-center">
        {/* Skeleton placeholder to avoid layout shift */}
        <div className="flex flex-row items-center gap-2">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="w-[50px] h-[50px] rounded-full bg-gray-700 animate-pulse"
            />
          ))}
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-700 animate-pulse" />
          <div className="hidden md:block w-24 h-4 bg-gray-700 animate-pulse rounded" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 flex items-center justify-between mx-auto max-w-6xl p-5 z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="grey"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      {/* ✅ useRouter instead of <Link> to avoid nested <a> tags */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        onClick={() => router.push("#contact")}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
          onClick={() => router.push("#contact")}
        />
        <p className="hidden md:inline text-gray-500 uppercase text-sm ml-2">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}
