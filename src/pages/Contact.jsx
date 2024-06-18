import React from "react";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          margin: "50px auto 20px",
        }}
      >
        <h1>Contact Me</h1>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Got a question? I'd love to hear from you. Send me a message and I'll
          respond as soon as possible.
        </p>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
