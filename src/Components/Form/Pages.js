import React, { useState } from "react";

//Components
import NextForm from "../Form/NextForm";
import NameForm from "../Form/NameForm";
import GeneratedPage from "../General/GeneratedPage";

const Pages = ({
  setCurrentPage,
  handleChange,
  errorExists,
  uploadMultipleFiles,
  image,
  uploadFiles,
  handleSubmit,
  currentPage,
}) => {
  if (currentPage === 0) {
    return (
      <NameForm
        setCurrentPage={setCurrentPage}
        handleChange={handleChange}
        errorExists={errorExists}
        uploadMultipleFiles={uploadMultipleFiles}
        uploadFiles={uploadFiles}
        image={image}
        handleSubmit={handleSubmit}
      />
    );
  } else if (currentPage === 1) {
    return <GeneratedPage />;
  }
};

export default Pages;
