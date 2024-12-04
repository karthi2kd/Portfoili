import { Text, Img, Button, Input, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-center gap-[138px] lg:gap-[103px] md:gap-[103px] sm:gap-[69px]`}
    >
      <div className="container-xs flex flex-col items-end pl-14 pr-[206px] lg:px-5 md:px-5">
        <div className="flex w-[80%] flex-col gap-12 lg:w-full md:w-full">
          <div className="flex flex-col items-center gap-3.5">
            <Heading size="h2_65" as="h1" className="lg:text-[48px]">
              Lets Design Together
            </Heading>
            <Text as="p" className="self-stretch text-center leading-[31px]">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
              convallis pretium
            </Text>
          </div>
          <div className="mx-7 flex justify-center gap-6 md:mx-0 md:flex-col">
            <Input shape="round" name="Email Input" placeholder={`Enter Your Email`} />
            <Button size="md" shape="round" className="min-w-[222px] !rounded-[14px] font-semibold tracking-[0.72px]">
              Contact Me{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex h-[552px] flex-col items-center gap-[62px] self-stretch bg-[url(/public/images/img_frame_26.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto sm:gap-[31px]">
        <div className="container-xs mt-[108px] flex flex-col items-center gap-[90px] px-14 lg:gap-[90px] lg:px-5 md:gap-[67px] md:px-5 sm:gap-[45px]">
          <div className="mr-3.5 flex w-[60%] flex-col items-center gap-[74px] lg:w-full lg:gap-[74px] md:mr-0 md:w-full md:gap-[55px] sm:gap-[37px]">
            <Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[66px] w-[278px] object-contain" />
            <ul className="flex flex-wrap justify-center gap-10 self-stretch">
              <li>
                <a href="Home" target="_blank" rel="noreferrer">
                  <Text as="p">Home</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">About Me</Text>
                </a>
              </li>
              <li>
                <a href="Services" target="_blank" rel="noreferrer">
                  <Text as="p">Services</Text>
                </a>
              </li>
              <li>
                <a href="Projects" target="_blank" rel="noreferrer">
                  <Text as="p">Projects</Text>
                </a>
              </li>
              <li>
                <a href="Testimonials" target="_blank" rel="noreferrer">
                  <Text as="p">Testimonials</Text>
                </a>
              </li>
              <li>
                <a href="Contact" target="_blank" rel="noreferrer">
                  <Text as="p">Contact</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-[16%] justify-between gap-5 lg:w-full md:w-full">
            <Img src="images/img_facebook_negative.svg" alt="Facebook Icon" className="h-[32px] w-[32px]" />
            <Img src="images/img_twitter_negative.svg" alt="Twitter Icon" className="h-[32px] w-[32px]" />
            <Img src="images/img_instagram_negative.svg" alt="Instagram Icon" className="h-[32px] w-[32px]" />
            <Img src="images/img_link.svg" alt="Linkedin Icon" className="h-[32px] w-[32px]" />
          </div>
        </div>
        <div className="flex h-[84px] items-center justify-center self-stretch bg-[url(/public/images/img_group_11.png)] bg-cover bg-no-repeat py-[26px] lg:h-auto md:h-auto sm:py-4">
          <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
            <Text as="p" className="!text-white-a700">
              <span className="text-white-a700">© 2023&nbsp;</span>
              <span className="font-bold text-amber-900">Mumair All Rights Reserved , Inc.</span>
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
