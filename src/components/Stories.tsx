import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const Stories = () => {
  return (
    <div className="xl:h-[90vh] bg-rose-700">
      <h1 className="text-center text-white font-semibold text-2xl md:text-4xl p-10 md:p-14">
        Stories from previous visitors
      </h1>
      <div className="md:grid grid-cols-2 items-center px-8 gap-8 lg:py-0 py-5">
        <Card className="lg:mb-0 mb-5">
          <CardContent className="flex flex-col lg:flex-row md:justify-center items-center p-10 gap-x-10">
            <div className="">
              <Image height={100} width={100} src="person2.svg" alt="" />
              <p className="text-xl font-bold">Lauren M.</p>
            </div>
            <p className="md:text-lg text-md md:w-3/5">
              “VanDusen Botanical Garden is a serene haven in Vancouver,
              offering a stunning array of flowers and plants. A must-visit for
              city dwellers seeking a natural escape”
            </p>
          </CardContent>
        </Card>
        <Card className="lg:mb-0 mb-5">
          <CardContent className="flex flex-col lg:flex-row md:justify-center items-center p-10 gap-x-10">
            <div>
              <Image height={100} width={100} src="/person1.svg" alt="" />
              <p className="text-xl font-bold">David B.</p>
            </div>
            <p className="md:text-lg text-md md:w-3/5">
              “VanDusen Botanical Garden is a plant lover&apos;s paradise in
              Vancouver. The peaceful atmosphere and diverse collection make it
              a top destination for nature enthusiasts”
            </p>
          </CardContent>
        </Card>
        <Card className="lg:mb-0 mb-5">
          <CardContent className="flex flex-col lg:flex-row md:justify-center items-center p-10 gap-x-10">
            <div>
              <Image height={100} width={100} src="/person3.svg" alt="" />
              <p className="text-xl font-bold">Michael A.</p>
            </div>
            <p className="text-md md:text-lg md:w-3/5">
              “We were absolutely captivated by the beauty of the Festival of
              Lights. The gardens came alive with vibrant colors and intricate
              designs that felt straight out of a storybook.”
            </p>
          </CardContent>
        </Card>
        <Card className="lg:mb-0 mb-5">
          <CardContent className="flex flex-col lg:flex-row md:justify-center items-center p-10 gap-x-10">
            <div>
              <Image height={100} width={100} src="/person4.svg" alt="" />
              <p className="text-xl font-bold">Sophie T.</p>
            </div>
            <p className="text-md md:text-lg md:w-3/5">
              “A truly enchanting evening from start to finish! The combination
              of twinkling lights, holiday music, and friendly staff created an
              unforgettable experience.”
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
