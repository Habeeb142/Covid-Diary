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
        Upload Your Images:
      </p>
      <form>
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
          {image.map((url) => (
            <img
              src={url}
              alt="..."
              style={{
                width: "150px",
                height: "150px",
                marginRight: "10px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
        <div className="form-group">
          <div>
            <button className="btn btn-dark">
              <input
                type="file"
                className="form-control"
                onChange={uploadMultipleFiles}
                multiple
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
        <button
          type="button"
          className="btn btn-secondary"
          style={{ marginTop: 10 }}
          onClick={uploadFiles}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
