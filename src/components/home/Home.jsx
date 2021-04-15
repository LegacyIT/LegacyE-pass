import React, { useState } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import particlesType_3 from "../../config/configType_3";
import "./home.css";

const Home = () => {
  const [department, setDepartment] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setDepartment(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          zIndex: "-1",
        }}
      >
        <Particles height="100vh" width="100vw" params={particlesType_3} />
      </div>
      <section className="App-header parent">
        <div className="container-fluid main_sect  align-content-center">
          <div className="container-fluid">
            <h3 className="text-center">Welcome to,</h3>

            <div className="main_content ">
              <h2
                className="display-2 text-center animate__animated animate__bounceInDown"
                style={{
                  color: "#ff7a01",
                  fontFamily: "mtnbrighterextrabolditalic",
                }}
              >
                Legacy
                <span className="d-inline-flex">
                  <h1
                    className=""
                    style={{
                      color: "aliceblue",
                      fontFamily: "mtnbrightermediumitalic",
                    }}
                  >
                    Electronic Arts
                  </h1>
                </span>
              </h2>
            </div>
          </div>

          <div className="m-5">
            <p className="text-center">
              Select your appropriate department below
            </p>
          </div>

          <div className="container-fluid ">
            <form className="">
              <div className="form-group">
                <select
                  placeholder="Select Department"
                  className="custom-select w-75 mx-auto d-block border border-warning"
                  onChange={handleChange}
                >
                  <option value="LegacyCR">select...</option>
                  <option value="LegacyCR">LegacyCR</option>
                  <option value="LegacyIT">LegacyIT</option>
                  <option value="LegacyAM">LegacyAM</option>
                  <option value="LegacyGS">LegacyGS</option>
                </select>
              </div>
              <div className="form-group d-flex justify-content-center m-3 p-3">
                <Link to={`/${department}`} className="btn p-2">
                  Proceed
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="footer_className">
        <nav
          className="navbar navbar-expand-sm navbar-dark fixed-bottom"
          style={{ height: "30px" }}
        >
          <ul className="navbar-nav">
            <p className="text-muted" style={{ fontSize: "12px" }}>
              All Rights Reserved. LegacyEA 2021
            </p>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Home;
