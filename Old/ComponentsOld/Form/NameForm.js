import React, { useState } from "react";
import "./input.css";
import { Form, Button } from "react-bootstrap";
import Error from "../Modals/Error";
import Upload from "../Form/Upload";

const NameForm = ({
  handleChange,
  text,
  name,
  month,
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
          fontWeight: "400",
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
                color: "#000",
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
                <p>My most interesting / impactful month so far is: </p>{" "}
                <input
                  type="text"
                  id="month"
                  value={month}
                  placeholder=""
                  onChange={handleChange}
                  className="formControlName"
                ></input>
                <br />
                <p>Because:</p>
                <textarea
                  type="text"
                  id="text"
                  value={text}
                  placeholder=""
                  onChange={handleChange}
                  className="formControl"
                  maxlength="100"
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
                <p>
                  {" "}
                  Word of wisdom / Note to self:{" "}
                  <span
                    style={{
                      color: "#B11F24",
                      fontWeight: "bold",
                    }}
                  >
                    (Optional)
                  </span>{" "}
                </p>
                <textarea
                  type="text"
                  id="fact"
                  value={fact}
                  placeholder=""
                  onChange={handleChange}
                  className="formControl"
                  maxlength="70"
                />
              </div>
              <br />
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
