import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }
  };
 
  return (
    <div>
      <h1
        data-testid="h1tag"
        className="text-center"
        style={{
          backgroundColor: "000000",
          color: "000000",
          padding: "20px",
        }}
      >
        Contact Me
      </h1>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#060c12",
          color: "#979db0",
        }}
      >
        <Form.Group
          style={{
            backgroundColor: "#060c12",
            color: "#979db0",
            padding: "20px",
          }}
        >
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group
          style={{
            backgroundColor: "#060c12",
            color: "#979db0",
            padding: "20px",
          }}
        >
          <Form.Label htmlFor="email">Email Address:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group
          style={{
            backgroundColor: "#060c12",
            color: "#979db0",
            padding: "20px",
          }}
        >
          <Form.Label htmlFor="message">Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            defaultValue={message}
            onBlur={handleChange}
          />
        </Form.Group>
        {errorMessage && (
          <div className="ml-4 mb-4">
            <p className="error-text text-capitalize">{errorMessage}</p>
          </div>
        )}
        <Button className="ml-4 mb-4"
          data-testid="button"
          type="submit"
          style={{
            backgroundColor: "#be8180",
            color: "#060c12",
            padding: "10px",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;