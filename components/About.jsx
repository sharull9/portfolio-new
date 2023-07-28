import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="relative grid grid-rows-[320px_1fr] md:grid-rows-1 z-40 md:grid-cols-2 px-6">
      <div className="w-100 h-100 relative">
        <Image
          src={"/me.jpg"}
          className="absoulte inset-0 object-cover rounded aspect-square"
          alt="self-portrait"
          fill
        />
      </div>
      <div className="md:p-6 mt-10 md:mt-0">
        <div className="mx-auto max-w-2xl mb-10">
          <h2 className="mt-2 text-3xl font-bold tracking-tight underline underline-offset-4 text-gray-900 sm:text-4xl">
            About me
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hello, I&apos;m{" "}
            <a href="https://instagram.com/sh_ar_ull" className="text-blue-700">
              Arafatulla
            </a>
            , a dedicated front-end developer with a passion for crafting
            immersive digital experiences. With a strong foundation in web
            development, I strive to create websites that not only look great
            but also deliver seamless functionality and optimal user
            experiences. My journey began with litte bit curosity how website
            works, how to crate them and since then, I have been honing my
            skills and staying up-to-date with the latest industry trends and
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
