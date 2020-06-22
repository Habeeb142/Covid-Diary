import React from "react";
import "./nav.css";

//Bootstrap
import { Navbar } from "react-bootstrap";

//Image
import Logo from "../.././assets/NBR Logo/nbr-white.png";
import BudLogo from "../../assets/Bud Logo/bud-fill.png";

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
            height="90"
            className="d-inline-block align-top logo"
          />{" "}
          <img
            alt=""
            src={BudLogo}
            height="50"
            className="d-inline-block align-top budlogo"
          />{" "}
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Nav;
