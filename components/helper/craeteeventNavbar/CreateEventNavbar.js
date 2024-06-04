import React from "react";
import logo from "../../../app/assets/ticket 1.svg";
import Image from "next/image";
import { Calendar, FileBarChart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const CreateEventNavbar = () => {
  return (
    <>
      <nav>
        <div className="flex border-b-[1px] h-20 items-center">
          <span className="w-[27%] flex font-bold text-[22px] items-end justify-center">
            <Image
              alt="logo"
              src={logo}
              height={45}
              width={45}
              className="mr-4"
            />
            Bookyourtickets
          </span>

          <div className="flex w-[45%] justify-center">
            <span className="flex text-[12px] text-gray-500 font-bold  w-[11vh]">
              <FileBarChart color="grey" size={16} className="mr-2" />
              Reports
            </span>
            <span className="flex text-[12px] text-gray-500 font-bold  w-[11vh] ml-14">
              <Calendar color="grey" size={16} className="mr-2" />
              Events
            </span>
          </div>

          <Button className="w-44 bg-gradient-to-b from-[#ED437E] to-[#FB76A4] rounded-[8px] ml-24 text-white shadow-md transition duration-200 ease-in-out hover:shadow-2xl">
            <Plus className="h-4 mr-2" />
            Create event
          </Button>
          <Avatar className=" ml-12">
            <AvatarFallback className="AvatarFallback bg-black text-white">
              A
            </AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </>
  );
};

export default CreateEventNavbar;
