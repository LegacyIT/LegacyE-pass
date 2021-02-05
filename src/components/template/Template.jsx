import React from "react";
import { saveAs } from "file-saver";
import * as htmlToImage from "html-to-image";
import "./template.css";
import image from "./../../img/background5.jpg";

const Template = (props) => {
  const handleSubmit = () => {
    var node = document.getElementById("_template");
    htmlToImage.toJpeg(node).then(function (dataUrl) {
      saveAs(dataUrl, "avatar.png");
    });
  };

  return (
    <div class="d-flex justify-content-center scroll">
      <div
        class="card border-0"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="card-body d-flex justify-content-center">
          <div
            style={{
              width: "250px",
              height: "250px",
              marginTop: "5rem",
            }}
            class="picture"
          ></div>
        </div>

        <div class="card-body d-flex justify-content-center m-0">
          <div class="name text-center">Akodi peterson</div>
        </div>

        <div class="card-body d-flex justify-content-center m-0">
          <div class="name text-center">LegacyGS || Developer</div>
        </div>

        <div class="card-body d-flex justify-content-center m-0">
          <div
            class="text-center text-capitalize"
            style={{ fontFamily: "mtnbrighterextrabold", fontSize: "30px" }}
          >
            INTERN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
