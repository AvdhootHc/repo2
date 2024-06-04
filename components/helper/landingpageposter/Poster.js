import React from "react";
import Image from "next/image";

const Poster = () => {
  return (
    <div className="h-[60vh] w-[100%] relative">
      <Image
        layout="fill"
        objectFit="cover"
        alt="logo"
        className="absolute inset-0"
        src={
          "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
    </div>
  );
};

export default Poster;
