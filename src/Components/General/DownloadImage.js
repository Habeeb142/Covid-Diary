import React from "react";

import { Card } from "react-bootstrap";

const DownloadImage = ({ uploadedImageSrc, text }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Card
          style={{
            width: "13rem",
            backgroundColor: "#b11917",
            color: "white",
            borderRadius: "25px",
            // paddingTop: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={uploadedImageSrc}
            variant="top"
            style={{
              pmarginTop: "5px",
              borderRadius: "50%",
              border: "2px solid black",
              objectFit: "cover",
              width: "60px",
              height: "60px",
            }}
          />
          <Card.Body>
            <Card.Text
              style={{
                fontSize: "0.4rem",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              I{" "}
              <span
                style={{
                  textTransform: "uppercase",
                }}
              >
                {text}
              </span>{" "}
              , Endorse The Naija Bar Rescue Initiative.​ To curtail the spread
              of COVID-19, Bars have closed their doors. Consequently, they
              don’t have money to pay their staff and other bills. ​ Support
              your favorite bar and their employees. ​<br />
              <br />
              Buy a N1500 beer voucher, Budweiser would match it and pay the bar
              N3000 now. You can redeem your voucher when the bar opens
            </Card.Text>
          </Card.Body>
        </Card>
        <div>
          <p
            style={{
              border: "2px solid #b11917",
              backgroundColor: "#b11917",
              borderRadius: "25px",
              padding: "5px",
              textAlign: "center",
              marginTop: "10px",
              fontWeight: "400",
              fontSize: "0.4rem",
            }}
          >
            <a
              href="http://www.naijabarrescue.com"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              www.naijabarrescue.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadImage;
