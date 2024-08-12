import { Heading, Text, Img, Slider } from "../../components";
import React from "react";

export default function TestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* testimonials section */}
      <div>
        <div className="flex flex-col items-center gap-[78px] lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
          <div className="container-xs flex flex-col items-center gap-3.5 px-14 lg:px-5 md:px-5">
            <Heading size="h2_65" as="h1" className="lg:text-[48px]">
              Testimonials
            </Heading>
            <Text as="p" className="self-stretch text-center leading-[31px]">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
              convallis pretium
            </Text>
          </div>
          <div className="flex justify-center self-stretch overflow-auto md:flex-col">
            <div className="flex h-[344px] w-[56%] items-center justify-center rounded-[14px] bg-[url(/public/images/img_group_32.svg)] bg-cover bg-no-repeat px-12 py-[52px] opacity-20 lg:h-auto md:h-auto md:w-full md:p-5 sm:px-5 sm:py-4">
              <div className="flex w-full items-center md:flex-col">
                <Img src="images/img_ellipse_12.svg" alt="Circleimage" className="h-[234px] w-[234px] rounded-[50%]" />
                <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                  <div className="relative z-[3] flex flex-wrap items-start px-14 md:px-5 sm:px-4">
                    <Heading
                      as="h2"
                      className="mb-[188px] tracking-[0.64px] !text-amber-900 md:text-[26px] sm:text-[24px]"
                    >
                      “
                    </Heading>
                    <Text size="textxs" as="p" className="self-end tracking-[0.38px]">
                      CEO
                    </Text>
                  </div>
                  <div className="relative ml-[-58px] flex w-[86%] items-start justify-center md:ml-0 md:w-full md:flex-col">
                    <Heading size="textmd" as="p" className="self-end tracking-[0.48px] md:self-auto">
                      Name
                    </Heading>
                    <div className="mb-7 flex w-full flex-col items-start">
                      <Text
                        size="texts"
                        as="p"
                        className="w-[46%] text-justify leading-[31px] tracking-[0.42px] !text-gray-800 lg:w-full md:w-full"
                      >
                        Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque
                        mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada
                        commodo ultrices.
                      </Text>
                      <Heading
                        as="h2"
                        className="relative ml-[374px] mt-[-40px] tracking-[0.64px] !text-amber-900 md:ml-0 md:text-[26px] sm:text-[24px]"
                      >
                        “
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center pl-[62px] pr-14 lg:pl-8 md:flex-col md:px-5">
              <div className="flex w-[86%] items-center md:w-full md:flex-col">
                <div className="flex w-[76%] items-start md:w-full md:flex-col">
                  <div className="flex w-full md:flex-col">
                    <div className="mx-auto flex w-full">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                        disableDotsControls
                        activeIndex={sliderState}
                        onSlideChanged={(e) => {
                          setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        items={[...Array(3)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="flex items-center md:flex-col">
                              <div className="flex w-[38%] items-center justify-center rounded-[14px] bg-gray-100 px-12 py-[52px] md:w-full md:flex-col md:p-5 sm:p-4">
                                <Img
                                  src="images/img_ellipse_10.png"
                                  alt="Profileimage"
                                  className="h-[234px] w-[234px] rounded-[116px] object-cover md:w-full"
                                />
                                <div className="flex flex-1 items-start justify-center px-2.5 md:flex-col md:self-stretch">
                                  <Heading
                                    as="h2"
                                    className="tracking-[0.64px] !text-amber-900 md:text-[26px] sm:text-[24px]"
                                  >
                                    “
                                  </Heading>
                                  <div className="mt-6 flex-1 self-end md:self-stretch sm:self-auto">
                                    <div className="flex flex-col items-start">
                                      <div className="mr-[18px] flex flex-col items-start self-stretch md:mr-0">
                                        <div className="flex flex-col items-end self-stretch">
                                          <Text
                                            size="texts"
                                            as="p"
                                            className="w-full text-justify leading-[31px] tracking-[0.42px] !text-gray-800"
                                          >
                                            Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo
                                            urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor
                                            elementum convallis dignissim malesuada commodo ultrices.
                                          </Text>
                                          <Heading
                                            as="h2"
                                            className="relative mr-[230px] mt-[-40px] tracking-[0.64px] !text-amber-900 md:mr-0 md:text-[26px] sm:text-[24px]"
                                          >
                                            “
                                          </Heading>
                                        </div>
                                        <Heading size="textmd" as="p" className="relative mt-[-8px] tracking-[0.48px]">
                                          Name
                                        </Heading>
                                      </div>
                                      <Text size="textxs" as="p" className="tracking-[0.38px]">
                                        CEO
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <Img
                                  src="images/img_ellipse_11.png"
                                  alt="Secondaryimage"
                                  className="h-[234px] w-[234px] self-center rounded-[116px] object-cover"
                                />
                                <Heading
                                  as="h2"
                                  className="ml-2.5 tracking-[0.64px] !text-amber-900 md:text-[26px] sm:text-[24px]"
                                >
                                  “
                                </Heading>
                                <Text size="textxs" as="p" className="self-end tracking-[0.38px]">
                                  CEO
                                </Text>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                    <Img
                      src="images/img_group_32.svg"
                      alt="Groupimage"
                      className="relative ml-[-352px] h-[344px] w-[42%] rounded-[14px] object-contain md:ml-0 md:w-full"
                    />
                  </div>
                  <Text
                    size="texts"
                    as="p"
                    className="relative ml-[-66px] mt-20 w-[44%] text-justify leading-[31px] tracking-[0.42px] !text-gray-800 lg:w-[44%] md:ml-0 md:w-full"
                  >
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis
                    id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo
                    ultrices.
                  </Text>
                </div>
                <Heading
                  size="textmd"
                  as="p"
                  className="relative mb-[82px] ml-[-66px] self-end tracking-[0.48px] md:ml-0 md:self-auto"
                >
                  Name
                </Heading>
              </div>
              <Heading
                as="h2"
                className="mb-[110px] self-end tracking-[0.64px] !text-amber-900 md:self-auto md:text-[26px] sm:text-[24px]"
              >
                “
              </Heading>
            </div>
          </div>
          <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
            <div className="flex items-center justify-center">
              {[...Array(4)].map((_, i) => (
                <>
                  {sliderState >= i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
                  sliderState < (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1) ? (
                    <div
                      onClick={() => {
                        sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
                      }}
                      className="mr-[9px] inline-block h-[16px] w-[56px] cursor-pointer rounded-lg bg-amber-900"
                    />
                  ) : (
                    <div
                      onClick={() => {
                        sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
                      }}
                      className="mr-[9px] inline-block h-[16px] w-[56px] cursor-pointer rounded-lg bg-blue_gray-100"
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
