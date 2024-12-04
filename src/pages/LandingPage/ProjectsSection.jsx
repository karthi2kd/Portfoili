import { Button, Text, Heading } from "../../components";
import WebDesignComponent from "../../components/WebDesignComponent";
import React, { Suspense } from "react";

const webDesignList = [
  {
    webDesignImageOne: "images/img_web_designs.png",
    webDesignImageTwo: "images/img_web_designs_404x274.png",
    webDesignText: "Web Design ",
    airCallingText: "AirCalling Landing Page Design ",
  },
  {
    webDesignImageOne: "images/img_web_designs_488x272.png",
    webDesignImageTwo: "images/img_web_designs_412x272.png",
    webDesignText: "Web Design ",
    airCallingText: "Business Landing Page Design ",
  },
  {
    webDesignImageOne: "images/img_web_designs_488x274.png",
    webDesignImageTwo: "images/img_web_designs_412x274.png",
    webDesignText: "Web Design ",
    airCallingText: "Ecom Web Page Design ",
  },
];

export default function ProjectsSection() {
  return (
    <>
      {/* projects section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[106px] lg:gap-[106px] lg:px-5 md:gap-[79px] md:px-5 sm:gap-[53px]">
          <div className="ml-[234px] mr-[254px] flex flex-col gap-[58px] md:mx-0 sm:gap-[29px]">
            <div className="ml-3.5 flex flex-col items-center gap-[22px] md:ml-0">
              <Heading size="h2_65" as="h1" className="!text-gray-900 lg:text-[48px]">
                My Projects
              </Heading>
              <Text as="p" className="self-stretch text-center leading-[31px]">
                Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus
                consequat urna tellus
              </Text>
            </div>
            <div className="flex justify-center md:flex-col">
              <Button
                color="gray_100"
                shape="round"
                className="min-w-[70px] border-[0.4px] border-solid border-blue_gray-700 tracking-[0.72px]"
              >
                All
              </Button>
              <div className="flex flex-1 justify-center gap-[17px] px-[22px] md:flex-col md:self-stretch sm:px-4">
                <div className="relative h-[56px] w-[14%] content-center rounded-[12px] border-[0.4px] border-solid border-blue_gray-700 bg-gray-100 lg:h-auto md:h-auto md:w-full">
                  <Text size="24_r" as="p" className="mx-auto">
                    UI/UX
                  </Text>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 content-center rounded-[12px] border-[0.4px] border-solid border-blue_gray-700 bg-gray-100 lg:h-auto md:h-auto">
                    <Text size="24_r" as="p" className="mx-auto">
                      UI/UX
                    </Text>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 content-center rounded-[12px] border-[0.4px] border-solid border-blue_gray-700 bg-gray-100 lg:h-auto md:h-auto">
                      <Text size="24_r" as="p" className="mx-auto">
                        UI/UX
                      </Text>
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center rounded-[12px] border-[0.4px] border-solid border-blue_gray-700 bg-gray-100 p-2.5">
                        <Text size="24_r" as="p">
                          UI/UX
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  shape="round"
                  className="min-w-[190px] border-[0.4px] border-solid border-blue_gray-700 tracking-[0.72px]"
                >
                  Web Design
                </Button>
                <Button
                  color="gray_100"
                  shape="round"
                  className="min-w-[184px] border-[0.4px] border-solid border-blue_gray-700 tracking-[0.72px]"
                >
                  App Design
                </Button>
                <Button
                  color="gray_100"
                  shape="round"
                  className="min-w-[234px] border-[0.4px] border-solid border-blue_gray-700 tracking-[0.72px]"
                >
                  Graphic Design
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-11 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {webDesignList.map((d, index) => (
                <WebDesignComponent {...d} key={"designsList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
