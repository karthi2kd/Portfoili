import React from "react";

const sizes = {
  nav_bar_text_21: "tracking-[0.63px] text-[21px] font-normal not-italic lg:text-[17px]",
  "24_r": "tracking-[0.72px] text-[24px] font-normal not-italic lg:text-[20px] md:text-[22px]",
  sub_p_19: "tracking-[0.57px] text-[19px] font-normal not-italic lg:text-[16px]",
  textxs: "text-[19px] font-normal not-italic lg:text-[16px]",
  texts: "text-[21px] font-normal not-italic lg:text-[17px]",
};

const Text = ({ children, className = "", as, size = "nav_bar_text_21", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
