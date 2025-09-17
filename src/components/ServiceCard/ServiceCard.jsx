import React from "react";
import Link from "next/link";

const ServiceCard = ({ title, imgUrl, bgColor, titleBg, linkColor }) => {
  return (
    <div className="px-4 lg:px-5 w-full lg:w-6/12">
      <div
        className={`p-6 lg:p-12 border ${bgColor} border-black rounded-xl-custom h-full min-h-[310px] d-flex items-center justify-center`}
      >
        <div className="flex lg:justify-between flex-wrap gap-y-5 lg:gap-0 h-full">
          {/* Left */}
          <div className="w-full lg:w-6/12 flex flex-col justify-between gap-y-3 lg:gap-0">
            <h3 className={`max-w-[221px] ${titleBg} rounded-md px-1.5`}>
              {title}
            </h3>
            <div className="mt-auto">
              <Link
                className={`text-lg lg:text-xl ${linkColor} font-normal`}
                href={"#"}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-5/12">
            <img
              className="mx-auto lg:mx-0 lg:h-full lg:w-full lg:object-contain"
              src={imgUrl}
              alt={`${title} image`}
              width={210}
              height={166}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
