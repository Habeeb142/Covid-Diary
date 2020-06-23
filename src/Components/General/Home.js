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
    fact: "",
  });
  const [image, setImage] = useState([]);
  const [imageObj, setImageObj] = useState([]);
  const [errorExists, setErrorExists] = useState(false);

  const { name, text, fact } = diary;

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
    if (name === "" || text === "" || fact === "") {
      setErrorExists(true);
      console.log("error");
    } else {
      setErrorExists(false);

      let formData = new FormData();
      formData.append("name", name);
      formData.append("text", text);
      formData.append("fact", fact);
      imageObj.forEach((file, i) => {
        formData.append(`image${i + 1}`, file);
      });
      console.log(imageObj);
      // setCurrentPage(1);

      console.log(formData.entries());
      fetch("https://covid-diary.herokuapp.com/uploader/", {
        method: "POST",
        // headers: {
        //   'Content-Type': "multipart/form-data",
        // },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(formData);
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
