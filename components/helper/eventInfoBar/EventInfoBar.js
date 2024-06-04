import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BadgeCheck,
  CalendarRange,
  FileText,
  TicketPercent,
} from "lucide-react";
import React from "react";

const EventInfoBar = () => {
  return (
    <div className="border-r-[1px] w-[22%] h-[40.5rem]">
      <div>
        <Accordion collapsible>
          <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger className="mt-16 text-white">
              <span className="flex mx-4 items-center font-bold text-[14px] text-gray-700">
                <CalendarRange size={15} className="mr-3" color="#ED437E" />
                ADD EVENT DETAILS
              </span>
            </AccordionTrigger>
            <AccordionContent className="flex justify-between mx-4 text-gray-600 ">
              Basics
              <BadgeCheck size={15} className="mt-1" color="black" />
            </AccordionContent>
            <AccordionContent className="flex justify-between mx-4  text-gray-600">
              Location
              <BadgeCheck size={15} className="mt-1" color="black" />
            </AccordionContent>
            <AccordionContent className="flex justify-between mx-4  text-gray-600">
              Desccription
              <BadgeCheck size={15} className="mt-1" color="black" />
            </AccordionContent>
            <AccordionContent className="flex justify-between mx-4  text-gray-600">
              photos
              <BadgeCheck size={15} className="mt-1" color="black" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible>
          <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger className="mt-[-8px] text-white">
              <span className="flex mx-4 items-center font-bold text-[14px] text-gray-700">
                <TicketPercent size={15} className="mr-3" color="#ED437E" />
                ADD TICKETS
              </span>
            </AccordionTrigger>
            <AccordionContent className="flex justify-between mx-4 text-gray-600">
              Tickets
              <BadgeCheck size={15} className="mt-1" color="black" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible>
          <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger className="mt-[-8px] text-white">
              <span className="flex mx-4 items-center font-bold text-[14px] text-gray-700">
                <FileText size={15} className="mr-3" color="#ED437E" />
                ADD FORM QUESTIONS
              </span>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default EventInfoBar;
