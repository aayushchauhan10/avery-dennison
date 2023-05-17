import React from "react";
import { bannerImage } from "../../assets/images";
import { headerLogo } from "../../assets/images";
import { links } from "../../constants";

const Link = ({ icon, description }) => (
  <div className="flex flex-col w-[15%] items-center">
    <div className="bg-[#292929] rounded-[50%] mx-2 flex ">
      <img src={icon} alt="" className="p-3 w-[50px] h-[54px] " />
    </div>
    <div>
      <p className="px-12 text-[12px] w-40">{description}</p>
    </div>
  </div>
);

const Header = () => {
  return (
    <div>
      <img src={bannerImage} className="-z-50" />
      <div className="absolute top-0 left-0">
        <img src={headerLogo} className="p-[60px] w-[320px] h-48" />
        <div className="w-[46%] p-[60px] pb-5">
          <h2 className="text-[30px] font-aktifoaBook pb-2">
            Take your graphics protection to the next level with DOL max
            overLaminates
          </h2>
          <p className="font-aktifoaLight text-[20px]">
            Pair with MPI 1105 wrapping film for ramped up protection
          </p>
        </div>
        <div className="flex items-center text-[#5d5d5d] font-aktifoaBook p-[30px]">
          {links.map((link, index) => (
            <Link key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
