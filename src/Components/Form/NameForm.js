import React, { useState } from "react";
import "./input.css";
import { Form, Button } from "react-bootstrap";
import Error from "../Modals/Error";
import Upload from "../Form/Upload";

const NameForm = ({
  handleChange,
  text,
  name,
  fact,
  errorExists,
  uploadFiles,
  uploadMultipleFiles,
  image,
  handleSubmit,
}) => {
  return (
    <>
      {errorExists ? <Error name={"name"} /> : null}
      <Form
        style={{
          textAlign: "left",
          padding: "25px",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "100",
          fontSize: "1.1rem",
        }}
        className="pledgeContainer"
        onSubmit={handleSubmit}
      >
        {" "}
        <>
         
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>My name is </p>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder=""
                  onChange={handleChange}
                  className="formControlName"
                ></input>
              </div>
              <br />
              <div
                style={{
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>During the lockdown, I </p>
                <textarea
                  type="text"
                  id="text"
                  value={text}
                  placeholder=""
                  onChange={handleChange}
                  className="formControl"
                />
              </div>
              <br />
              <div
                style={{
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>Fun Fact: </p>
                <textarea
                  type="text"
                  id="fact"
                  value={fact}
                  placeholder=""
                  onChange={handleChange}
                  className="formControl"
                />
              </div>
              <div>
                <Upload
                  uploadMultipleFiles={uploadMultipleFiles}
                  uploadFiles={uploadFiles}
                  image={image}
                />
              </div>
            </div>
          </div>
          <br />
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
            Submit
          </Button>
        </>
      </Form>
    </>
  );
};

export default NameForm;
