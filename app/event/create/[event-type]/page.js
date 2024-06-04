import CreateEventNavbar from "@/components/helper/craeteeventNavbar/CreateEventNavbar";
import React from "react";
import logo from "../../../assets/Logo-WhiteandPnkT.svg";
import EventInfoBar from "@/components/helper/eventInfoBar/EventInfoBar";

const page = () => {
  return (
    <>
      <CreateEventNavbar />
      <div>
        <EventInfoBar />
      </div>
    </>
  );
};

export default page;
