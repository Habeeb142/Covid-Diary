import React, { useState } from "react";
import { Next } from "react-bootstrap/PageItem";
import { Col, Form, Button } from "react-bootstrap";

import Error from "../Modals/Error";
import { DropdownDivider } from "semantic-ui-react";

const NextForm = ({ text, setCurrentPage, setErrorExists, errorExists }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setErrorExists(true);
    } else {
      setErrorExists(false);
      setCurrentPage(2);
    }
  };
  return (
    <>
      {errorExists ? <Error name={"location"} /> : null}
      <div
        style={{
          textAlign: "left",
          paddingTop: "50px",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "100",
          fontSize: "1.1rem",
        }}
      >
        <h3
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "400",
            fontSize: "2.1rem",
          }}
        >
          Hi, {text}
        </h3>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "100",
            fontSize: "1.2rem",
          }}
        >
          You are almost done
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group
              as={Col}
              xs={12}
              md={12}
              lg={6}
              controlId="formGridState"
            >
              <Form.Control
                as="select"
                value={value}
                onChange={handleChange}
                className="formInput"
              >
                <option>Select Location</option>
                <option>Abia</option>
                <option>Adamawa</option>
                <option>Akwa Ibom</option>
                <option>Anambra</option>
                <option>Bauchi</option>
                <option>Bayelsa</option>
                <option>Benue</option>
                <option>Borno</option>
                <option>Cross River</option>
                <option>Delta</option>
                <option>Ebonyi</option>
                <option>Edo</option>
                <option>Ekiti</option>
                <option>Enugu</option>
                <option>FCT</option>
                <option>Gombe</option>
                <option>Imo</option>
                <option>Jigawa</option>
                <option>Kaduna</option>
                <option>Kano</option>
                <option>Kastina</option>
                <option>Kebbi</option>
                <option>Kogi</option>
                <option>Kwara</option>
                <option>Lagos</option>
                <option>Nassarawa</option>
                <option>Niger</option>
                <option>Ogun</option>
                <option>Ondo</option>
                <option>Osun</option>
                <option>Osun</option>
                <option>Oyo</option>
                <option>Plateau</option>
                <option>Rivers</option>
                <option>Sokoto</option>
                <option>Taraba</option>
                <option>Yobe</option>
                <option>Zamfara</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "100",
              fontSize: "0.8rem",
            }}
          >
            You confirm that we can inform and invite you to subsequent
            campaigns.
          </p>
          <Button
            type="submit"
            style={{
              backgroundColor: "#977239",
              border: "none",
              outline: "unset",
              padding: "15px",
              width: "150px",
            }}
          >
            Confirm
          </Button>
        </Form>
      </div>
    </>
  );
};

export default NextForm;
