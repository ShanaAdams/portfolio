import React from "react";
function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const onSubmit = async (e) => {
    // Prevent the form from submitting the traditional way
    e.preventDefault();
    // Don't submit twice
    if (loading) {
      return;
    }

    // get all the form values as an object
    const form = e.target;
    const formValues = Object.fromEntries(new FormData(form).entries());
    console.log(formValues);
    setLoading(true);
    setSuccess("");

    try {
      await fetch("/api/contacts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });

      setLoading(false);
      setSuccess("Thank you for contacting us!");

      // Reset the form values after a successful submission
      form.reset();
    } catch (err) {
      console.error(err);
      alert("An error occurred while sending your message...");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "30%",
        margin: "0 auto",
      }}
    >
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <span>Message</span>
        <textarea name="message" required rows="10" cols="50" />
      </label>
      <button
        disabled={loading}
        type="submit"
        style={{
          backgroundColor: "#213547",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "4px",
          width: "100%",
        }}
      >
        Send Message
      </button>
      {success && <p>{success}</p>}
    </form>
  );
}

export default ContactForm;
