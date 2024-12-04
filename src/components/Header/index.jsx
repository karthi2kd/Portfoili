import { Button, Text, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex md:flex-col justify-between items-center gap-5`}>
      <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[66px] w-[278px] object-contain" />
      <div className="flex w-[72%] justify-between">
        <ul className="flex flex-wrap gap-3">
          <li>
            <a href="#" className="flex items-center justify-center bg-white-a700">
              <Text as="p" className="p-3">
                Home
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center bg-white-a700">
              <Text as="p" className="p-3">
                About Me
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center bg-white-a700">
              <Text as="p" className="p-3">
                Services
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center bg-white-a700">
              <Text as="p" className="p-3">
                Projects
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center bg-white-a700">
              <Text as="p" className="p-3">
                Testimonials
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center bg-white-a700">
              <Text as="p" className="p-3">
                Contact
              </Text>
            </a>
          </li>
        </ul>
        <Button size="xs" className="min-w-[188px] rounded-[5px] leading-[31px] tracking-[0.63px]">
          Downlaod CV
        </Button>
      </div>
    </header>
  );
}
