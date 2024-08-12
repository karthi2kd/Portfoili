import React from "react";

const sizes = {
  small_heading_24: "tracking-[0.72px] text-[24px] font-semibold lg:text-[20px] md:text-[22px]",
  main_heading_h1: "tracking-[3.00px] text-[100px] font-bold lg:text-[100px] md:text-[48px]",
  h2_65: "tracking-[1.95px] text-[65px] font-semibold lg:text-[65px] md:text-[48px]",
  sub_heading_24: "tracking-[0.72px] text-[24px] font-bold lg:text-[20px] md:text-[22px]",
  textmd: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  headingxs: "text-[32px] font-bold lg:text-[27px] md:text-[30px] sm:text-[28px]",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
