import React, { useState } from "react";
import "./Message.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { messages, placeHolder } from "../utils/utils";

const Message = () => {
  // hooks
  const [message, setMessage] = useState("");

  // functions
  const handleOnChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleOnSend = () => {
    if (message) {
      console.log(message);
    }
  };

  return (
    <section className="contact-me">
      <h5>{messages}</h5>
      <Form className="message-input">
        <Form.Control
          type="text"
          placeholder={placeHolder}
          onChange={handleOnChange}
          value={message}
        />
        <Button variant="light" className="send-button" onClick={handleOnSend}>
          <i className="fas fa-solid fa-paper-plane fa-lg"></i>
        </Button>
      </Form>
    </section>
  );
};

export default Message;
