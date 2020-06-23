import React from "react";
import "./nav.css";

//Bootstrap
import { Navbar } from "react-bootstrap";

//Image
import Logo from "../.././assets/General/logo2.jpg";
// import BudLogo from "../../assets/General/logo2.jpg";

const Nav = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand
          style={{
            color: "white",
            padding: "25px 20px",
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
            style={{
              width: "130px",
            }}
            className="d-inline-block align-top logo"
          />{" "}
          <img
            alt=""
            src=""
            height="50"
            className="d-inline-block align-top budlogo"
          />{" "}
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Nav;
