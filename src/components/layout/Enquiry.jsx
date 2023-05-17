import React, { useContext } from "react";
import { FormCreation } from "../pages";
import { Group218 } from "../../assets/images";
import { paras } from "../../constants";

const Para = ({ para }) => (
  <ul className="list-disc px-5 font-aktifoaLight">
    <li className="my-4 w-[60%]">{para}</li>
  </ul>
);

const Enquiry = () => {
  const { toggleForm } = useContext(FormCreation);

  return (
    <div>
      <img src={Group218} className="-z-50" />
      <div className="absolute top-[110vh] px-16">
        <div>
          <h2 className="font-aktifoaSemibold text-[30px]">
            Dol Max Overlaminate Films
          </h2>
          <p className="font-aktifoaLight">
            Printed graphics deserve maximum protection, DOL Max is the
            solution.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="font-aktifoaMedium mb-3">Features and Benefits:</h3>
          {paras.map((para, index) => (
            <Para key={index} {...para} />
          ))}
        </div>
        <button
          onClick={toggleForm}
          className="flex text-[#fff] font-aktifoaSemibold rounded-[5px] items-center px-8 my-12  cursor-pointer py-2 bg-[#f26621]"
        >
          <p>Inquire Now</p>
          <div class="flex items-center">
            <div class="h-0.5 w-6 bg-white translate-x-3"></div>
            <div class="h-3 w-3 bg-transparent border-2 border-white border-l-0 border-t-0 transform rotate-[-40deg] -translate-y-0"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Enquiry;
