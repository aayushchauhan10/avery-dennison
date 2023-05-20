import React, { useContext } from "react";
import { FormCreation } from "../pages";
import { Group218 } from "../../assets/images";
import { paras } from "../../constants";



const Para = ({ para }) => (
  <ul className="list-disc px-5 font-aktifoaLight">
    <li className="lg:my-4 xxs:my-1 lg:w-[55%] xxs:w-auto">{para}</li>
  </ul>
);

const Enquiry = () => {
  const { toggleForm } = useContext(FormCreation);

  return (
    <div className="">
      <div className="min-w-[200px] overflow-x-hidden xxs:transform xxs:translate-y-[490%] lg:transform lg:translate-y-[0] scale-120 w-[100%] rightToLeft ">
        <img
          src={Group218}
          className="-z-50 w-[100%] min-w-[1400px] xxs:pl-96 sm:pl-0 md:h-[100%]"
        />
      </div>
      <div className="absolute xxl:top-[140vh] lg:top-[110vh] xxs:top-[250vh] ssm:top-[210vh] lg:z-50 xxs:z-0 lg:px-16 xxs:px-8 lg:py-0 xxs:p-10">
        <div>
          <h2 className="font-aktifoaSemibold pb-2 lg:text-[35px] xxs:text-[20px] w-auto">
            Dol Max Overlaminate Films
          </h2>
          <p className="font-aktifoaLight w-auto">
            Printed graphics deserve maximum protection, DOL Max is the
            solution.
          </p>
        </div>
        <div className="lg:mt-5 xxs:mt-1">
          <h3 className="font-aktifoaMedium mb-3">Features and Benefits:</h3>
          {paras.map((para, index) => (
            <Para key={index} {...para} />
          ))}
        </div>
        <button
          onClick={toggleForm}
          className="flex text-[#fff] font-aktifoaSemibold rounded-[5px] items-center px-8 my-12 cursor-pointer py-2 bg-[#f26621]"
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
