"use client";
import { color } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export default function LinkText({ link, text, variant }) {
  const [color, setColor] = useState("text-black");
  const [bgColor, setBgColor] = useState("bg-white");
  const [hoverColor, setHoverColor] = useState("hover:text-blue-600");
  return (
    <Link href={link}>
      <p className={`${color} ${bgColor} ${hoverColor} px-4 py-2 rounded`}>
        {text}
      </p>
    </Link>
  );
}
