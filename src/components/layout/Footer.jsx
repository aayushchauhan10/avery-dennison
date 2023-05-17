import React from "react";
import { vectorImage } from "../../assets/images";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1A1A1A] py-7">
        <div className="flex justify-around ">
          <div className="flex text-[#fff] justify-around items-center  ">
            <div>
              <h2 className="pb-3 font-aktifoaLight">Best solutions from </h2>
              <img src={vectorImage} className="w-40 h-14" />
            </div>
            <ul className="ml-32 font-aktifoaLight">
              <li className="my-2">DOL Max Overlaminate Films</li>
              <li className="my-2">Why us?</li>
              <li className="my-2">Enquire Now</li>
            </ul>
          </div>
          <div className="flex font-aktifoaLight text-[#727272] items-center justify-between">
            <ul className="px-7">
              <li>Avery Dennison Overlaminate</li>
              <li>Avery Dennison Overlaminate Films</li>
              <li>Avery Dennison Digital Overlaminate films</li>
              <li>Avery Dennison DOL Max</li>
            </ul>
            <ul className="ml-24">
              <li>Overlaminate</li>
              <li>Overlaminate Films</li>
              <li>Digital Overlaminate Films</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] font-aktifoaLight text-center py-4">
        &copy; 2023 Avery Dennison Label Packaging Material. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
