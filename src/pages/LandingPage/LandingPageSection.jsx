import { SeekBar, Heading, Text, Img, Button } from "../../components";
import React from "react";

export default function LandingPageSection() {
  return (
    <>
      {/* landing page section */}
      <div className="flex flex-col items-center gap-[68px] sm:gap-[34px]">
        <div className="container-xs lg:px-5 md:px-5">
          <div className="mr-6 flex flex-col gap-9 md:mr-0">
            <div className="flex items-center md:flex-col">
              <div className="mb-6 flex flex-1 flex-col items-start self-end md:self-stretch sm:self-auto">
                <div className="flex flex-col items-start gap-1.5 self-stretch">
                  <Heading size="small_heading_24" as="h1" className="ml-1.5 md:ml-0">
                    Hi I am{" "}
                  </Heading>
                  <div className="relative h-[278px] self-stretch">
                    <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 flex-col items-start">
                      <Heading
                        as="h2"
                        className="!font-semibold tracking-[0.96px] !text-amber-900 md:text-[26px] sm:text-[24px]"
                      >
                        Muhammad Umair{" "}
                      </Heading>
                      <Heading size="main_heading_h1" as="h3" className="relative mt-[-32px] lg:text-[48px]">
                        UI & UX
                      </Heading>
                    </div>
                    <Heading
                      size="main_heading_h1"
                      as="h4"
                      className="absolute bottom-[-0.70px] right-[9%] m-auto lg:text-[48px]"
                    >
                      Designer{" "}
                    </Heading>
                  </div>
                </div>
                <Text
                  as="p"
                  className="relative z-[1] ml-1.5 w-[88%] text-justify leading-[31px] lg:w-full md:ml-0 md:w-full"
                >
                  Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec
                  morbi convallis pretium. Turpis tempus pharetra
                </Text>
                <Button
                  size="xs"
                  className="ml-1.5 mt-[22px] min-w-[188px] rounded-[5px] leading-[31px] tracking-[0.63px] md:ml-0"
                >
                  Hire Me{" "}
                </Button>
              </div>
              <div className="flex w-[44%] flex-col items-end md:w-full">
                <div className="relative z-[2] h-[352px] content-center self-stretch lg:h-auto md:h-auto">
                  <Img
                    src="images/img_layer_0_copy_4.png"
                    alt="Profile Image"
                    className="ml-auto h-[352px] w-[88%] object-contain"
                  />
                  <div className="absolute right-[13%] top-[22%] m-auto h-[82px] w-[70%] bg-amber-900_99" />
                </div>
                <div className="white_A700_00_deep_orange_A200_border relative mr-[30px] mt-[-220px] w-[84%] rounded-[242px] border-[6px] border-solid bg-white-a700 shadow-bs1 lg:w-full md:mr-0 md:w-full">
                  <Img
                    src="images/img_layer_0_copy_3.png"
                    alt="Secondary Image"
                    className="h-[484px] w-full rounded-[242px] object-cover lg:h-auto md:h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="mx-44 flex justify-end gap-[25px] md:mx-0 sm:flex-col">
              <Img
                src="images/img_facebook_negative.svg"
                alt="Facebook Image"
                className="h-[32px] w-[32px] sm:w-full"
              />
              <Img src="images/img_twitter_negative.svg" alt="Twitter Image" className="h-[32px] w-[32px] sm:w-full" />
              <Img
                src="images/img_instagram_negative.svg"
                alt="Instagram Image"
                className="h-[32px] w-[32px] sm:w-full"
              />
              <Img src="images/img_link.svg" alt="Linkedin Image" className="h-[32px] w-[32px] sm:w-full" />
            </div>
          </div>
        </div>
        <div className="flex w-[76%] items-center justify-center gap-8 lg:w-full lg:px-5 md:w-full md:flex-col md:px-5">
          <div className="relative h-[674px] w-[46%] md:w-full">
            <div className="white_A700_00_deep_orange_A200_border absolute bottom-[0.81px] left-0 right-0 mx-[60px] my-auto flex-1 rounded-[272px] border-[6.74px] border-solid bg-white-a700 shadow-bs lg:mx-0 md:mx-0">
              <Img
                src="images/img_background_copy.png"
                alt="Background Image"
                className="h-[544px] w-full rounded-[272px] object-cover lg:h-auto md:h-auto"
              />
            </div>
            <div className="absolute left-0 right-0 top-0 m-auto h-[406px] flex-1 content-center lg:h-auto md:h-auto">
              <Img
                src="images/img_background_copy_406x680.png"
                alt="Foreground Image"
                className="mx-auto h-[406px] w-full flex-1 object-cover"
              />
              <div className="absolute left-0 right-0 top-[27%] m-auto h-[82px] w-[54%] bg-amber-900_99" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3.5 md:self-stretch">
            <Heading size="h2_65" as="h5" className="lg:text-[48px]">
              About Me{" "}
            </Heading>
            <Text as="p" className="w-full leading-[31px]">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
              convallis pretium. Turpis tempus pharetra
            </Text>
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <Heading size="small_heading_24" as="h6">
                  UX
                </Heading>
                <SeekBar
                  inputValue={[0]}
                  trackColors={["#fd6f00", "#ecebeb"]}
                  className="flex h-[32px] self-stretch rounded-md"
                  trackClassName="h-[12px] w-full rounded-md"
                />
              </div>
              <Heading size="small_heading_24" as="h4">
                Website Design
              </Heading>
              <SeekBar
                inputValue={[86.72]}
                trackColors={["#fd6f00", "#ecebeb"]}
                className="flex h-[32px] self-stretch rounded-md"
                trackClassName="h-[12px] w-full rounded-md"
                thumbClassName="flex justify-center items-center h-[32px] w-[32px] rounded-[50%] border-amber-900 border-[3px] border-solid bg-gray-200 shadow-xs"
              />
              <Heading size="small_heading_24" as="h4">
                App Design{" "}
              </Heading>
              <div className="self-stretch">
                <div>
                  <SeekBar
                    inputValue={[95.22]}
                    trackColors={["#fd6f00", "#ecebeb"]}
                    className="flex h-[32px] rounded-md"
                    trackClassName="h-[12px] w-full rounded-md"
                    thumbClassName="flex justify-center items-center h-[32px] w-[32px] rounded-[50%] border-amber-900 border-[3px] border-solid bg-gray-200 shadow-xs"
                  />
                </div>
              </div>
              <Heading size="small_heading_24" as="h4">
                Graphic Design{" "}
              </Heading>
              <SeekBar
                inputValue={[90.97]}
                trackColors={["#fd6f00", "#ecebeb"]}
                className="flex h-[32px] self-stretch rounded-md"
                trackClassName="h-[12px] w-full rounded-md"
                thumbClassName="flex justify-center items-center h-[32px] w-[32px] rounded-[50%] border-amber-900 border-[3px] border-solid bg-gray-200 shadow-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
