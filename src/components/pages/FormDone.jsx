import { React, useState } from "react";
import FormCreation from "./FormCreation";

const FormDone = ({ children }) => {
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
    const formElement = document.getElementById("myForm");
    formElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <FormCreation.Provider value={{ showForm, toggleForm }}>
      {children}
    </FormCreation.Provider>
  );
};

export default FormDone;
