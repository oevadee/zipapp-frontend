import React from "react";
import Image from "next/image";

export const IndexView: React.FC = () => {
  return (
    <div>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </div>
  );
};
