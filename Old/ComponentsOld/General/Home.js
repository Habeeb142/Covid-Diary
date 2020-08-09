import React, { useState } from "react";
import "./home.css";

//Bootstrap
import { Form } from "react-bootstrap";

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
    month: "",
    fact: "",
  });
  const [image, setImage] = useState([]);
  const [imageObj, setImageObj] = useState([]);
  const [errorExists, setErrorExists] = useState(false);

  const { name, text, month, fact } = diary;

  //user name
  const handleChange = (e) => {
    setDiary({ ...diary, [e.target.id]: e.target.value });
    console.log(diary);
  };

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    console.log(fileObj);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setImage([...fileArray]);
    setImageObj(Array.from(e.target.files));
    console.log(image);
  };

  const uploadFiles = (e) => {
    e.preventDefault();
    console.log(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || text === "" || month === "") {
      setErrorExists(true);
      console.log("error");
    } else {
      setErrorExists(false);

      let formData = new FormData();
      formData.append("name", name);
      formData.append("text", text);
      formData.append("month", month);
      formData.append("fact", fact);
      imageObj.forEach((file, i) => {
        formData.append(`image`, file);
      });
      console.log(imageObj);
      // setCurrentPage(1);

      console.log(formData.entries());
      fetch("https://covid-diary.herokuapp.com/uploader/", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setCurrentPage(1);
          console.log(data);
          localStorage.setItem("id", data._id);
        })
        .catch((err) => console.log(err));
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
