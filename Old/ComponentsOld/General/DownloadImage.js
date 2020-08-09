import React from "react";

import { Card } from "react-bootstrap";
import Capture from "../../assets/General/capture.svg";
import Diary from "../../assets/General/Diary.svg";
import Logo from "../../assets/General/logo.svg";
import "./download.css";

const DownloadImage = ({ uploadedImageSrc, diary }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "350px",
          padding: "0px 30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Diary}
            alt="/"
            style={{
              width: "30px",
              marginRight: "8px",
            }}
          />
          <img
            src={Capture}
            alt="/"
            style={{
              width: "112px",
            }}
          />
        </div>
        <div>
          {diary.image[0] ? (
            <img
              src={diary.image[0]}
              alt="/"
              style={{
                border: "2px solid #F49C00",
                objectFit: "cover",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            />
          ) : null}
        </div>
      </div>
      <div
        style={{
          padding: "0px 30px",
        }}
      >
        <p
          style={{
            marginBottom: "0rem",
            fontSize: "0.8rem",
          }}
          className="font"
        >
          My name is{" "}
          <span
            style={{ color: "#B11F24", fontWeight: "bold", fontSize: "1rem" }}
          >
            {diary.name}
          </span>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
              justifyContent: "space-between",
            }}
          >
            {diary.image[1] ? (
              <img
                src={diary.image[1]}
                alt="/"
                style={{
                  objectFit: "cover",
                  width: "100px",
                  height: "100px",
                }}
              />
            ) : null}
            &nbsp;
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "500",
                textAlign: "left",
                width: "13rem",
                padding: "10px",
                height: "auto",
              }}
              className="contentText"
            >
              My most interesting/impactful month so far is {diary.month}{" "}
              because {diary.text}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            {diary.fact === "" ? null : (
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  textAlign: "left",
                  padding: "10px",
                  height: "auto",
                }}
                className="contentText"
              >
                <span
                  style={{
                    color: "#B11F24",
                    fontWeight: "bold",
                  }}
                >
                  Word of wisdom / Note to self: &nbsp;
                </span>
                {diary.fact}
              </p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={Logo}
              alt="/"
              style={{
                width: "80px",
                marginTop: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadImage;
