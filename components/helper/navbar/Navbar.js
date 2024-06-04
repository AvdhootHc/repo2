"use client";


import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MapPin, Plus, SearchIcon } from "lucide-react";
import Image from "next/image";
import logo from "../../../app/assets/Logo-WhiteandPnkT.svg";
import { Button } from "../../ui/button";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { useMediaQuery } from "react-responsive";
import { Input } from "@/components/ui/input";

import "./style.css";

export const Navbar = () => {
  const router = useRouter();
  const isSmallScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const [searchContent, setsearchContent] = useState("");

  const handleCreateEventClick = () => {
    router.push("/event/create");
  };

  return (
    <div className="fixed top-0 max-w-full z-[100] w-full">
      <div className="flex items-center w-full bg-gray-800 bg-opacity-40 h-[80px]">
        <Image src={logo} alt="logo" className="ml-6" />
        <div className="searchbox flex items-center bg-[#F2F2F280] border-none w-[35%] h-11 ml-32 rounded-[2px]">
          <SearchIcon className="text-white h-4 ml-4" />
          <Input
            placeholder="Search.."
            className="border-none bg-transparent text-white"
            onChange={(e) => {
              setsearchContent(e.target.value);
            }}
          />
        </div>
        <Button
          onClick={() => console.log("first")}
          className="bg-gradient-to-b from-[#ED437E] to-[#FB76A4] text-white py-2 px-4 shadow-md focus:outline-none ml-10 rounded-[8px] w-24 transition duration-600 ease-in-out hover:shadow-2xl"
        >
          <MapPin
            size={20}
            color="#f7f3f3"
            strokeWidth={1.5}
            absoluteStrokeWidth={false}
          />
          <span className="ml-2">Pune</span>
        </Button>
        <Button
          onClick={handleCreateEventClick}
          className="w-44 bg-gradient-to-b from-[#ED437E] to-[#FB76A4] rounded-[8px] ml-24 text-white shadow-md transition duration-200 ease-in-out hover:shadow-2xl"
        >
          <Plus className="h-4 mr-2" />
          Create event
        </Button>
        <Avatar className=" ml-12">
          {/* <AvatarImage src="https://github.com/shadcn.png" alt="A" /> */}
          <AvatarFallback className="AvatarFallback bg-black text-white">
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
