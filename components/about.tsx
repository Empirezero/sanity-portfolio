"use client";
import { motion } from "motion/react";
import React from "react";
import { PostInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  postInfo: PostInfo | null;
};

export default function About({ postInfo }: Props) {
  return (
    <div className="flex flex-col items-center relative justify-center h-screen ">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-8">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {postInfo?.heroImage ? (
          <img
            src={urlFor(postInfo.heroImage).url()}
            alt="Profile picture"
            className="rounded-full h-40 w-40 object-cover mx-auto"
          />
        ) : (
          <div className="rounded-full h-40 w-40 bg-gray-300 flex items-center justify-center text-gray-600 mx-auto">
            No Image
          </div>
        )}
      </motion.div>

      <div className="mt-6 px-10 max-w-2xl">
        <h4 className="text-2xl font-semibold mb-4">
          {postInfo?.title ?? "Your Name"}
        </h4>
        <p className="text-gray-400 text-base text-justify">
          {postInfo?.backgroundInformation ??
            "No background information provided yet."}
        </p>
      </div>
    </div>
  );
}
