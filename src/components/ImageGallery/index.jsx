import { Text, Heading, Img } from "./..";
import React from "react";

export default function ImageGallery({
  vectorImageFive = "images/img_vector_black_900.svg",
  vectorImageEnd = "images/img_vector_2x16.svg",
  uiux = "UI/UX",
  loremipsum = "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[24%] md:w-full gap-5 px-[18px] py-2.5 bg-gray-100 rounded-[14px]`}
    >
      <div className="mt-[46px] h-[70px] w-[24%] bg-[url(/public/images/img_group_14.svg)] bg-cover bg-no-repeat px-1.5 py-3">
        <div className="mt-1.5 flex flex-col justify-center">
          <div className="flex items-center">
            <Img src="images/img_reply.svg" alt="Reply Image" className="h-[8px]" />
            <Img src="images/img_vector.svg" alt="Vector Image" className="h-[2px] self-start" />
            <Img src="images/img_vector_amber_900.svg" alt="Amber Vector" className="ml-4 h-[2px] w-[2px]" />
          </div>
          <Img src={vectorImageFive} alt="Black Vector" className="relative ml-4 mt-[-2px] h-[2px]" />
          <div className="mt-4 flex items-start justify-end">
            <Img src="images/img_reply_black_900.svg" alt="Uiux Reply" className="h-[8px] self-center" />
            <Img src="images/img_vector_black_900_2x16.svg" alt="Uiux Vector" className="h-[2px]" />
          </div>
          <Img src={vectorImageEnd} alt="Uiux Image" className="relative mt-[-2px] h-[2px] self-end" />
        </div>
      </div>
      <Heading as="h2" className="!font-semibold tracking-[0.96px]">
        {uiux}
      </Heading>
      <Text size="sub_p_19" as="p" className="w-full leading-7">
        {loremipsum}
      </Text>
    </div>
  );
}
