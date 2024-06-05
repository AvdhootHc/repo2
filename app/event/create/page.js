"use client";
import EventType from "@/components/helper/eventType/EventType";
import React, { useState } from "react";
import physical from "@/app/assets/physical-event.svg";
import virtual from "@/app/assets/virtual-run.svg";
import online from "@/app/assets/online-event.svg";

const Page = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // State to track which card is hovered

  const handleMouseEnter = (card) => setHoveredCard(card);
  const handleMouseLeave = () => setHoveredCard(null);

  const events = [
    {
      imageSrc: online,
      altText: "Online Event",
      title: "Online Event",
      description:
        "Online events offer virtual gatherings for fostering global connections and learning experiences.",
      cardType: "online",
    },
    {
      imageSrc: physical,
      altText: "Physical Event",
      title: "Physical Event",
      description:
        "Global physical events provide in-person networking, enhancing real-world connections.",
      cardType: "physical",
    },
    {
      imageSrc: virtual,
      altText: "Virtual Run",
      title: "Virtual Run",
      description:
        "Virtual events: global, diverse, webinars, conferences, classes—connect and learn online.",
      cardType: "virtual",
    },
  ];

  return (
    <div className="min-h-screen py-2 bg-gray-100 flex justify-start items-start lg:p-8 md:p-4">
      <div className="sm:mx-16 md:mx-0 ">
        <h3 className="sm:text-3xl text-2xl font-bold text-[#344767] pl-10 mt-8">
          Select Event Type
        </h3>
        <p className="sm:mt-1 text-sm pl-10 pr-8 ">
          Your one stop solution for managing and conducting events.
        </p>

        <div className="flex flex-row flex-wrap justify-center mt-28 lg:ml-8 lg:gap-10 gap-20 md:gap-10 w-[100%] h-[100%]">
          {events.map((event) => (
            <EventType
              key={event.title}
              imageSrc={event.imageSrc}
              altText={event.altText}
              title={event.title}
              description={event.description}
              hoveredCard={hoveredCard}
              onMouseEnter={() => handleMouseEnter(event.cardType)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
