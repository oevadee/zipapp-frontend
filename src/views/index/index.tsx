import React from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const IndexView = () => {
  return (
    <div>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />

      <div>
        <h2 className={inter.className}>
          Templates <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Discover and deploy boilerplate example Next.js&nbsp;projects.
        </p>

        <h2 className={inter.className}>
          Deploy <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Instantly deploy your Next.js site to a shareable URL
          with&nbsp;Vercel.
        </p>
      </div>
    </div>
  );
};
