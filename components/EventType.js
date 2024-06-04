"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const EventType = ({
  imageSrc,
  altText,
  title,
  description,
  hoveredCard,
  onMouseEnter,
  onMouseLeave,
}) => {
  const getImageStyles = (card) => ({
    transform: hoveredCard === card ? "translateY(-40px)" : "translateY(0)", // Move image up on hover
    transition: "transform 130ms ease-in-out", // Smooth transition
  });

  return (
    <Card
      className="lg:h-[28vw] lg:w-[28vw]  h-[100vw] w-[100vw] sm:w-[45vw] sm:h-[50vw]  rounded-2xl shadow-lg relative "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-5 top-[-15px] absolute block">
        <Image
          src={imageSrc}
          alt={altText}
          className="w-full rounded-[10px] shadow-lg"
          style={getImageStyles(title)} // Apply hover styles
        />
        <CardContent>
          <CardTitle className="flex justify-center mt-4 text-xl text-[#344767]">
            {title}
          </CardTitle>
          <CardDescription className="sm:mt-5 mt-3">
            {description}
          </CardDescription>
          <div className="mt-8">
            <Separator />
          </div>
          <CardFooter className="flex justify-center items-center sm:my-6 my-3">
            Learn More
          </CardFooter>
        </CardContent>
      </div>
    </Card>
  );
};

export default EventType;
