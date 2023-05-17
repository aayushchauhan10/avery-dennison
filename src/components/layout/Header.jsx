import React from "react";
import { bannerImage } from "../../assets/images";
import { headerLogo } from "../../assets/images";
import { links } from "../../constants";

const Link = ({ icon, description }) => (
  <div className="flex flex-col sm:w-1/4 md:w-1/6 items-center">
    <div className="bg-[#292929] rounded-[50%] mx-2 flex items-center justify-between ">
      <img src={icon} alt="" className="p-3 w-[50px] h-[54px]" />
    </div>
    <div>
      <p className="px-4 py-1 text-sm sm:text-base text-center">
        {description}
      </p>
    </div>
  </div>
);

const Header = () => {
  return (
    <div id="myHead" className="h-screen relative">
      <div className="min-w-[360px] overflow-x-hidden w-[100%] rightToLeft">
        <img
          src={bannerImage}
          className="-z-50 w-[100%] min-w-[1400px] h-auto"
        />
      </div>
      <div className="absolute top-0 left-0 ">
        <img
          src={headerLogo}
          className="w-44 mx-6 sm:mx-36 mt-10 h-auto mb-4"
        />
        <div className="p-6 sm:p-[60px] pb-5">
          <h2 className="w-[45%] text-base sm:text-lg md:text-xl lg:text-3xl font-aktifoaBook pb-2">
            Take your graphics protection to the next level with DOL max
            overLaminates
          </h2>
          <p className="font-aktifoaLight w-[35%] text-lg sm:text-xl">
            Pair with MPI 1105 wrapping film for ramped up protection
          </p>
        </div>
        <div className="flex items-center text-[#5d5d5d] font-aktifoaBook p-2 sm:p-[30px]">
          {links.map((link, index) => (
            <Link key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
