import React from "react";
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
  return (
    <Col className="pledgeContainer" lg={12} xs={12} md={12}>
      <div>
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
          Download and share your pledge.
        </p>
      </div>
      <div id="canvasImage" style={{ position: "relative" }}>
        <canvas
          ref={canvasRef}
          id="canvas"
          height="300"
          width="300"
          onClick={(e) => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            // implement draw on ctx here
            const imageElement = document.getElementById("image");
          }}
          style={{
            backgroundColor: "#b11917",
          }}
        ></canvas>
        <div className="content">
          <DownloadImage
            uploadedImageSrc={uploadedImageSrc}
            text={text}
            printDocument={printDocument}
          />
        </div>
      </div>
      <Share text={text} printDocument={printDocument} />
    </Col>
  );
};

export default GeneratedPage;

{
  /* <div>
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
          Download and share your pledge.
        </p>
      </div>
      <Card id="divToPrint" className="downloadImage">
        <Navbar>
          <Navbar.Brand
            style={{
              color: "white",
              padding: "25px 5px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              alt=""
              src={Logo}
              height="50"
              width="45"
              className="d-inline-block align-top"
            />{" "}
            <img
              alt=""
              src={BudLogo}
              height="40"
              width="55"
              className="d-inline-block align-top budlogo"
            />{" "}
          </Navbar.Brand>
        </Navbar>
        <DownloadImage
          uploadedImageSrc={uploadedImageSrc}
          text={text}
          printDocument={printDocument}
        />
      </Card> */
}

// const input = document.getElementById("divToPrint");
// html2canvas(input).then((canvas) => {
//   const imgData = canvas.toDataURL("image/png");
//   const pdf = new jsPDF("portrait", "mm", "a4");
//   pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
//   // pdf.output('dataurlnewwindow');
//   pdf.save("download.pdf");
// });

// html2canvas(input).then((canvas) => {
//   const imgData = canvas.toDataURL("image/png");
//   const pdf = new jsPDF({
//     orientation: "portrait",
//   });
//   const imgProps = pdf.getImageProperties(imgData);
//   const pdfWidth = pdf.internal.pageSize.getWidth();
//   const pdfHeight = pdf.internal.pageSize.getHeight();
//   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//   pdf.save("download.pdf");
// Open the image in a new window
// window.open(exportedImage);
// });
// const canvas = document.getElementById("canvasImage");
