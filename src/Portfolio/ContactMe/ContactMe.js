import React, {useState} from "react";
import "./ContactMe.css"
import {Button, Form} from "react-bootstrap";
import {FORM_ENDPOINT} from "../../utils/config";

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submit, setSubmit] = useState("Send");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting)
      return;
    setIsSubmitting(true);
    setSubmit("Sending...");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmit("Thank you!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmit("Send again")
      }
    } catch (error) {
      setSubmit("Send again")
    }
    setIsSubmitting(false);
  };

  return (
    <section className="contact">
      <h1 className="heading heading-contact">Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-info">
          <Form.Group controlId="form-name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required/>
          </Form.Group>

          <Form.Group controlId="form-email" className="form-email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required/>
          </Form.Group>
        </Form.Group>

        <Form.Group controlId="form-subject" className="form-subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required/>
        </Form.Group>

        <Form.Group controlId="form-message" className="form-message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            size={"sm"}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required/>
        </Form.Group>
        <span className={"submit-message"}>{submit === "Send again" ? "Please try again later" : ""}</span>
        <Button
            variant={"outline-dark"}
            type={"submit"}
            disabled={isSubmitting || submit === "Thank you!"}
        >
          {submit}
        </Button>
      </Form>
    </section>
  );
};

export default ContactMe;
