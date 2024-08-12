import { Text, Heading } from "../../components";
import ImageGallery from "../../components/ImageGallery";
import React, { Suspense } from "react";

const replyList = [
  {
    vectorImageFive: "images/img_vector_black_900.svg",
    vectorImageEnd: "images/img_vector_2x16.svg",
    uiux: "UI/UX",
    loremipsum: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    vectorImageFive: "images/img_vector_black_900.svg",
    vectorImageEnd: "images/img_vector_2x16.svg",
    uiux: "Web Design ",
    loremipsum: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    vectorImageFive: "images/img_vector_black_900.svg",
    vectorImageEnd: "images/img_vector_2x16.svg",
    uiux: "App Design",
    loremipsum: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    vectorImageFive: "images/img_linkedin.svg",
    vectorImageEnd: "images/img_vector_amber_900_3x3.svg",
    uiux: "Graphic Design ",
    loremipsum: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
];

export default function ServicesSection() {
  return (
    <>
      {/* services section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-6 lg:px-5 md:px-5">
          <div className="ml-[238px] mr-[252px] flex flex-col items-center gap-3.5 md:mx-0">
            <Heading size="h2_65" as="h1" className="lg:text-[48px]">
              Services
            </Heading>
            <Text as="p" className="self-stretch text-center leading-[31px]">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
              convallis pretium
            </Text>
          </div>
          <div className="mr-2.5 flex gap-[30px] md:mr-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {replyList.map((d, index) => (
                <ImageGallery {...d} key={"featuresList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
