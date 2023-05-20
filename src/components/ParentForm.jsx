import React, { useState } from "react";
import { Form, FormDone } from "./pages";
import { Header, Enquiry, Requests, Footer } from "./layout";

const ParentForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    if ((<Form />)) {
      setIsOpen(false);
    }
  };

  return (
    <FormDone>
      <div className="h-auto">
        <Header />
        <Enquiry />
        <Requests />
        <Footer />
        <Form />
      </div>
    </FormDone>
  );
};

export default ParentForm;
