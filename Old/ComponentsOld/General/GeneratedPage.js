import React, { useEffect, useState } from "react";
import htmlToImage from "html-to-image";
import "./generate.css";

//Bootstrap
import { Col } from "react-bootstrap";
import Share from "../Layout/Share";
import DownloadImage from "./DownloadImage";

const GeneratedPage = ({ text, uploadedImage, uploadedImageSrc }) => {
  const canvasRef = React.useRef(null);
  const printDocument = () => {
    // const input = document.getElementById("canvasImage");
    htmlToImage
      .toJpeg(document.getElementById("canvasImage"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");
    fetch(`https://covid-diary.herokuapp.com/uploader/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(userInfo);

  return (
    <div className="pledgeContainer">
      <div
        style={{
          color: "black",
        }}
      >
        <h3
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "400",
            fontSize: "2.1rem",
          }}
        >
          Congratulations!
        </h3>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "100",
            fontSize: "1.2rem",
          }}
        >
          Download and share.
        </p>
      </div>
      <div id="canvasImage" style={{ position: "relative" }}>
        <canvas
          ref={canvasRef}
          id="canvas"
          height="380"
          width="380"
          onClick={(e) => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            // implement draw on ctx here
            const imageElement = document.getElementById("image");
          }}
          style={{
            backgroundColor: "#fefefe",
          }}
        ></canvas>
        <div className="content">
          {userInfo.map((diary) => (
            <DownloadImage
              uploadedImageSrc={uploadedImageSrc}
              diary={diary}
              printDocument={printDocument}
            />
          ))}
        </div>
      </div>
      <Share text={text} printDocument={printDocument} />
    </div>
  );
};

export default GeneratedPage;
