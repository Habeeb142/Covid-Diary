import React, { useState } from "react";
import "./home.css";
import Bottle from "../.././assets/NBR Logo/bottle.png";

//Bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//Components
import Nav from "../Layout/Nav";
import Pages from "../Form/Pages";

const Home = () => {
  let fileObj = [];
  let fileArray = [];
  const [currentPage, setCurrentPage] = useState(0);
  const [diary, setDiary] = useState({
    name: "",
    text: "",
    fact: "",
  });
  const [image, setImage] = useState([]);
  const [errorExists, setErrorExists] = useState(false);

  const { name, text, fact } = diary;

  //user name
  const handleChange = (e) => {
    setDiary({ ...diary, [e.target.id]: e.target.value });
    console.log(diary);
  };

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      image.push(URL.createObjectURL(fileObj[0][i]));
    }
    console.log(image);
    setImage(image);
  };

  const uploadFiles = (e) => {
    e.preventDefault();
    console.log(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || text === "" || fact === "") {
      setErrorExists(true);
      console.log("error");
    } else {
      setErrorExists(false);
      let formData = new FormData();
      formData.append("name", name);
      formData.append("text", text);
      formData.append("fact", fact);
      formData.append("image", image);
      // setCurrentPage(1);
      console.log(formData)
    //   fetch("https://covid-diary.herokuapp.com/", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       formData,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(formData);
    //     })
    //     .catch((err) => console.log(err));
    }
  };

  return (
    <div className="homePage">
      <Nav />
      <Form className="homeContainer">
        <Pages
          uploadMultipleFiles={uploadMultipleFiles}
          uploadFiles={uploadFiles}
          image={image}
          handleSubmit={handleSubmit}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          handleChange={handleChange}
          errorExists={errorExists}
        />
      </Form>
    </div>
  );
};

export default Home;
