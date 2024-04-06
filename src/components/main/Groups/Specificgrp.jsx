import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Groupdetails from "./GroupDetails/Groupdetails";
import GroupTransaction from "./GroupTransaction";

const Specificgrp = () => {
  return (
    <div className="h-full w-full relative justify-start items-start flex flex-col">
      <Accordion type="single" collapsible className=" w-full">
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger className="flex sm:justify-center w-full">
            <img
              src="https://github.com/shadcn.png"
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10 mx-2 rounded-md"
            />
            <h3 className="scroll-m-20 text-center sm:text-2xl text-xl font-semibold tracking-tight mx-2">
              Group 1
            </h3>
          </AccordionTrigger>
          <AccordionContent>
            <Groupdetails/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <GroupTransaction/>
    </div>
  );
};

export default Specificgrp;
