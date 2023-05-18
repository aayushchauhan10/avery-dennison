import React, { useState, useContext } from "react";
import { states, profiles, distributors } from "../../constants";
import { FormCreation } from "./index";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    company: "",
    message: "",
    subscribe: "",
  });

  const { showForm, toggleForm } = useContext(FormCreation);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for submitting the form!");
    setFormData({ name: "", email: "", message: "" });
    toggleForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {showForm && (
        <div className="absolute lg:top-96 lg:right-6 xxs:top-[150vh] sm:right-[10vw] xxs:right-[-25vw] transform -translate-x-1/2 shadow-md -translate-y-1/2 bg-white p-6 rounded lg:w-[450px] xxs:w-[300px]">
          <form id="myForm" onSubmit={handleFormSubmit}>
            <h2 className="lg:text-[24px] xxs:text-[16px] font-aktifoaBold ">
              Connect with us
            </h2>
            <p className="mb-3 lg:text-[20px] xxs:text-[13px] font-aktifoaBook">
              for outstanding protective overlaminates
            </p>
            <div className="lg:grid justify-start items-start lg:grid-cols-2  xxs:grid xxs:grid-cols-1">
              <div className="lg:flex-none xxs:flex xxs:flex-col">
                <label
                  htmlFor="firstName"
                  className="lg:text-[16px] xxs:[10px] font-aktifoaBook"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="my-2 p-1 border border-[#62777D] xxs:w-48 lg:w-auto rounded"
                />
                <label htmlFor="email" className="font-aktifoaBook">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="my-2 p-1 border border-[#62777D] xxs:w-48 lg:w-auto rounded"
                />
                <label htmlFor="company" className="font-aktifoaBook">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="my-2 p-1 border border-[#62777D] xxs:w-48 lg:w-auto rounded"
                />
              </div>
              <div className="lg:flex-none lg:ml-2 xxs:flex xxs:flex-col">
                <label htmlFor="lastName" className="font-aktifoaBook">
                  Last Name
                </label>
                <input
                  type="text"
                  name="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="my-2 p-1 border border-[#62777D] xxs:w-48 lg:w-auto rounded"
                />
                <label htmlFor="contact" className="font-aktifoaBook">
                  Contact
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="my-2 p-1 border border-[#62777D] xxs:w-48 lg:w-auto rounded"
                />
                <label htmlFor="state" className="font-aktifoaBook">
                  State
                </label>
                <select className="w-48 border border-[#62777D] my-2 rounded p-1">
                  <option value="">Select state</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <label htmlFor="describe" className="font-aktifoaBook">
              How would you desribe yourself?
            </label>
            <select className="lg:w-full border border-[#62777D] my-2 xxs:w-48 rounded p-1">
              <option value="">Select a profile</option>
              {profiles.map((profile, index) => (
                <option key={index} value={profile}>
                  {profile}
                </option>
              ))}
            </select>
            <label htmlFor="distributor" className="font-aktifoaBook ">
              Preferred Distributor:
            </label>
            <select className="lg:w-full border border-[#62777D] font-aktifoaBook xxs:w-48 my-2 rounded p-1">
              <option value="">Aerotect</option>
              {distributors.map((distributor, index) => (
                <option key={index} value={distributor}>
                  {distributor}
                </option>
              ))}
            </select>
            <div className="flex flex-col">
              <label htmlFor="info" className="font-aktifoaBook">
                Additional Information:{" "}
              </label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className=" my-2 p-2 border border-[#62777D] xxs:w-48 lg:w-auto rounded"
              ></textarea>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleInputChange}
                className="mr-2 border border-[#62777D]"
              />
              <label className="text-[12px] xxs:w-48 lg:w-auto font-aktifoaBook">
                I'd like to receive promotions, product information and service
                offers from Avery Dennison.
              </label>
            </div>

            <div className="lg:flex lg:justify-end xxs:flex xxs:justify-start">
              <button
                type="submit"
                className="text-white w-auto flex items-center font-aktifoaSemibold py-2 px-4 bg-[#f26621] rounded mr-2"
              >
                <p>Submit</p>
                <div class="flex items-center">
                  <div class="h-0.5 w-6 bg-white translate-x-3"></div>
                  <div class="h-3 w-3 bg-transparent border-2 border-white border-l-0 border-t-0 transform rotate-[-40deg] -translate-y-0"></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
