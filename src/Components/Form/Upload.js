import React, { Component } from "react";
import "../General/generate.css";

const Upload = ({ uploadFiles, uploadMultipleFiles, image, handleSubmit }) => {
  return (
    <div
      className="pledgeContainer"
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h4> Upload Your Images</h4>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: "350px",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            padding: "40px",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid white",
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
