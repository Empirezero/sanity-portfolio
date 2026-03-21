"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PostInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/image";


type Props = {
  pageInfo: PostInfo | null;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo?.title ?? "Developer"}`,
      "I'm a guy who loves gaming.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center">
      <BackgroundCircles />

      {pageInfo?.heroImage ? (
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src={urlFor(pageInfo.heroImage).url()}
          alt={pageInfo?.title ?? "Profile picture"}
        />
      ) : (
        <div className="relative rounded-full h-32 w-32 mx-auto bg-gray-300 flex items-center justify-center text-gray-600">
          No Image
        </div>
      )}

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px] pb-2">
          {pageInfo?.role ?? "Full-Stack Developer"}
        </h2>

        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiences</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
