import React from "react";
import { vectorImage } from "../../assets/images";

const Footer = () => {
  return (
    <div className="min-w-[200px] overflow-x-hidden xxs:transform xxs:translate-y-[215%] lg:transform lg:translate-y-[0] scale-120 w-[100%] ">
      <div className="bg-[#1A1A1A] xxs:object-contain py-7">
        <div className="lg:flex lg:flex-row justify-around xxs:flex xxs:flex-col-reverse xxs:px-5">
          <div className="lg:flex lg:flex-row xxs:flex xxs:flex-col-reverse xxs:justify-start text-[#fff] lg:justify-around lg:items-center xxs:items-start ">
            <div>
              <h2 className="pb-3 lg:visible font-aktifoaLight">
                Best solutions from{" "}
              </h2>
              <img src={vectorImage} className="lg:w-40 xxs:w-32 lg:h-14" />
            </div>
            <ul className="lg:ml-32 xxs:ml-2 font-aktifoaLight">
              <li className="my-2">DOL Max Overlaminate Films</li>
              <li className="my-2">Why us?</li>
              <li className="my-2">Enquire Now</li>
            </ul>
          </div>
          <div className="lg:flex lg:flex-row xxs:flex xxs:flex-col xxs:justify-start xxs:items-start font-aktifoaLight text-[#727272] lg:items-center lg:justify-between">
            <ul className="lg:px-7 text-[12px]">
              <li className="my-2 cursor-pointer">
                Avery Dennison Overlaminate
              </li>
              <li className="my-2 cursor-pointer">
                Avery Dennison Overlaminate Films
              </li>
              <li className="my-2 cursor-pointer">
                Avery Dennison Digital Overlaminate films
              </li>
              <li className="cursor-pointer my-2">Avery Dennison DOL Max</li>
            </ul>
            <ul className="lg:ml-24  text-[12px]">
              <li className="my-2 cursor-pointer">Overlaminate</li>
              <li className="my-2 cursor-pointer">Overlaminate Films</li>
              <li className="my-2 cursor-pointer">
                Digital Overlaminate Films
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] font-aktifoaLight text-center py-4 lg:[30px] xxs:text-[10px]">
        &copy; 2023 Avery Dennison Label Packaging Material. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
