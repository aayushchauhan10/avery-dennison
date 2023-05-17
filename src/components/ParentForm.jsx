import React from "react";
import { Form, FormDone } from "./pages";
import { Header, Enquiry, Requests, Footer } from "./layout";

const ParentForm = () => {
  return (
    <FormDone>
      <div>
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
