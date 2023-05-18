import React, { useContext } from "react";
import { wallImage } from "../../assets/images";
import { requests } from "../../constants";
import { FormCreation } from "../pages";

const Request = ({ icon, title, description }) => (
  <div className="lg:flex px-16 lg:items-center lg:justify-center xxs:justify-start py-6">
    <div className="bg-[#ffffff] lg:mx-3 xxs:ml-6 xxs:mb-2 xxs:w-[50px] xxs:h-[50px] lg:w-[80px]  lg:h-[80px] lg:px-6 xxs:object-contain xxs:px-1 lg:flex lg:justify-center lg:items-center xxs:flex xxs:justify-center xxs:items-center rounded-[50%]">
      <img
        src={icon}
        alt=""
        className="xxs:w-[80%] object-contain lg:w-7 lg:h-7.5 xxs:h-9"
      />
    </div>
    <div className="flex lg:w-[80%] ml-6 flex-col">
      <h2 className="font-aktifoaMedium ">{title}</h2>
      <p className="font-aktifoaLight text-[14px] lg:w-[99%]">{description}</p>
    </div>
  </div>
);

const Requests = () => {
  const { toggleForm } = useContext(FormCreation);
  return (
    <div className="bg-[#e5e5e5] lg:flex lg:flex-row xxs:flex xxs:flex-col-reverse min-w-[200px] overflow-x-hidden xxs:transform xxs:translate-y-[52%] sm:transform sm:translate-y-[65%] md:transform md:translate-y-[56%] lg:transform lg:translate-y-[0] scale-120 w-[100%] ">
      <div className="lg:w-[120%]  xxs:w-auto">
        <img src={wallImage} className="md:w-full lg:w-full" />
      </div>
      <div className="lg:p-8 xxs:my-32">
        <h1 className="font-aktifoaBold lg:mx-16 xxs:mx-10 text-[26px]">
          Why us?
        </h1>
        {requests.map((request, index) => (
          <Request key={index} {...request} />
        ))}
        <button
          onClick={toggleForm}
          className="flex text-[#fff] font-aktifoaSemibold rounded-[5px] items-center px-8 mt-6 mx-14 cursor-pointer py-2 bg-[#f26621]"
        >
          <p>Request a Call back</p>
          <div class="flex items-center">
            <div class="h-0.5 w-6 bg-white translate-x-3"></div>
            <div class="h-3 w-3 bg-transparent border-2 border-white border-l-0 border-t-0 transform rotate-[-40deg] -translate-y-0"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Requests;
