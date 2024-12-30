import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const Stories = () => {
  return (
    <div className="h-[80vh] bg-rose-700">
      <h1 className="text-center text-white font-semibold text-5xl p-14">
        Stories from previous visitors
      </h1>
      <div className="flex justify-center items-center p-10 gap-x-10">
        <Card className="">
          <CardContent className="flex justify-center items-center p-10 gap-x-10">
            <div className="">
              <Image height={150} width={150} src="person2.svg" alt="" />
              <p className="text-3xl font-bold">Lauren M.</p>
            </div>
            <p className="text-xl w-3/5">
              “VanDusen Botanical Garden is a serene haven in Vancouver,
              offering a stunning array of flowers and plants. A must-visit for
              city dwellers seeking a natural escape”
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex justify-center items-center p-10 gap-x-10">
            <div>
              <Image height={150} width={150} src="/person1.svg" alt="" />
              <p className="text-3xl font-bold">David B.</p>
            </div>
            <p className="text-xl w-3/5">
              “VanDusen Botanical Garden is a plant lover&apos;s paradise in
              Vancouver. The peaceful atmosphere and diverse collection make it
              a top destination for nature enthusiasts”
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
