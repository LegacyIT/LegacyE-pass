import React from "react";
import { Link } from "react-router-dom";
import "./greetings.css";

const Greeting = (props) => {
  return (
    <div className="wrapper d-flex justify-content-center align-items-center">
      {console.log(props)}
      <div
        className="card"
        style={{ width: "30rem", height: "18rem", backgroundColor: "#ff7a01" }}
      >
        <br />
        <div className="card-body">
          <h5 className="card-title">
            Hello {props?.location?.state?.info?.name},
          </h5>
          <p className="card-text">
            Thanks for signing up, you will receive your e-profile and ID via
            your Whatsapp handle in a bit. Be optimistic, here's your best
            experience ever.
            <br />
            remain Legacy.
          </p>
          <br />
          <span href="#" className="card-link">
            The LegacyEA Team
          </span>
          <div className="form-group d-flex justify-content-center mt-5 p-3">
            <Link to="/" className="btn p-2" id="valid_button">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
