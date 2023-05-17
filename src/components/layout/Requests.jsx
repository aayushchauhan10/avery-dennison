import React, { useContext } from "react";
import { wallImage } from "../../assets/images";
import { requests } from "../../constants";
import { FormCreation } from "../pages";

const Request = ({ icon, title, description }) => (
  <div className="flex px-16 py-6">
    <div className=" bg-[#ffffff] mx-3 px-6  flex items-center rounded-[50%]">
      <img src={icon} alt="" className="w-7 h-7.5 " />
    </div>
    <div className="flex w-[80%] ml-6 flex-col">
      <h2 className="font-aktifoaMedium ">{title}</h2>
      <p className="font-aktifoaLight text-[14px] w-[99%]">{description}</p>
    </div>
  </div>
);

const Requests = () => {
  const { toggleForm } = useContext(FormCreation);
  return (
    <div className="bg-[#e5e5e5] flex ">
      <div className="w-[70%]">
        <img src={wallImage} />
      </div>
      <div className="p-8">
        <h1 className="font-aktifoaBold mx-16 text-[26px]">Why us?</h1>
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
