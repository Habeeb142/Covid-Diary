import React, { Component } from "react";
import "../General/generate.css";
import "./upload.css";

const Upload = ({ uploadFiles, uploadMultipleFiles, image, handleSubmit }) => {
  return (
    <div className="pledgeContainer spaceupload">
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "400",
        }}
      >
        Upload Your Images:{" "}
        <span
          style={{
            color: "#b11917",
          }}
        >
          Please select two pictures at the same time: Your profile picture
          first and your fun fact picture
        </span>
      </p>
      <form>
        {image[0] ? (
          <div
            style={{
              width: "auto",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              padding: "40px",
              margin: "auto",
              marginBottom: "20px",
              border: "2px solid #b11917",
            }}
          >
            <img
              src={image[0]}
              alt="..."
              style={{
                width: "150px",
                height: "150px",
                marginRight: "10px",
                objectFit: "cover",
              }}
            />
          </div>
        ) : null}
        {image[1] ? (
          <div
            style={{
              width: "300px",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              padding: "40px",
              margin: "auto",
              marginBottom: "20px",
              border: "2px solid #b11917",
            }}
          >
            <img
              src={image[1]}
              alt="..."
              style={{
                width: "150px",
                height: "150px",
                marginRight: "10px",
                objectFit: "cover",
              }}
            />
          </div>
        ) : null}
        <div className="form-group">
          <div>
            <button className="btn btn-dark">
              <input
                type="file"
                multiple
                accept="image/*"
                className="form-control"
                onChange={uploadMultipleFiles}
                style={{
                  opacity: 0,
                  position: "absolute",
                  width: "100px",
                  // display: "none",
                  // pointerEvents: 'none',
                }}
              />
              Select Photo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Upload;
