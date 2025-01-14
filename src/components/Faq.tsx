import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <div className="h-[80vh] bg-rose-800">
      <h1 className="text-center text-white font-semibold text-4xl p-14">
        FAQ
      </h1>
      <div className="px-24">
        <Accordion type="single" collapsible className="bg-white">
          <AccordionItem value="item-1" className="px-5 py-2">
            <AccordionTrigger className="text-xl">
              Do you have parking lots?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Parking can get quite busy, so we recommend taking public transit,
              walking, or biking. We’re located on the #17 Oak bus route and a
              15-minute walk from the Oakridge Canada Line station. Parking is
              free in our lot off West 37th avenue but spaces are limited. Free
              street parking is also available in the surrounding area (where
              street signs permit). Please respect our neighbourhood and
              driveways of our neighbours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="px-5 py-2">
            <AccordionTrigger className="text-lg">
              When is the Hours and Days open?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              November and December:10:00am - 3:00pm Garden closed December 25.
              Note: Last entry is half an hour before closing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="px-5 py-2">
            <AccordionTrigger className="text-lg">
              Can I walk around with pets?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Working guide and service dogs are welcome. Leave pets at home.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="px-5 py-2">
            <AccordionTrigger className="text-lg">
              {" "}
              Can I ride bicycle in the garden?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Bicycles, scooters, and skateboards are not permitted in the
              garden. Strollers and wheelchairs are welcome.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
