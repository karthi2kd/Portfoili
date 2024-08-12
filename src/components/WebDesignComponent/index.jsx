import { Heading, Text, Img } from "./..";
import React from "react";

export default function WebDesignComponent({
  webDesignImageOne = "images/img_web_designs.png",
  webDesignImageTwo = "images/img_web_designs_404x274.png",
  webDesignText = "Web Design ",
  airCallingText = "AirCalling Landing Page Design ",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[32%] md:w-full gap-9`}>
      <div className="relative h-[488px] self-stretch rounded-[12px] bg-orange-50 px-[26px] sm:px-5">
        <Img
          src={webDesignImageOne}
          alt="First Image"
          className="absolute bottom-0 right-[26px] top-0 my-auto h-[488px] w-[70%] object-contain"
        />
        <Img
          src={webDesignImageTwo}
          alt="Second Image"
          className="absolute bottom-0 left-[9%] m-auto h-[404px] w-[72%] object-contain"
        />
      </div>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <Text size="sub_p_19" as="p" className="!text-amber-900">
          {webDesignText}
        </Text>
        <Heading size="sub_heading_24" as="h4">
          {airCallingText}
        </Heading>
      </div>
    </div>
  );
}
