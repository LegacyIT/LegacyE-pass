import React from "react";
import { saveAs } from "file-saver";
import * as htmlToImage from "html-to-image";
import "./template.css";
import image from "./../../img/background3.jpg";

const Template = (props) => {
  const handleSubmit = () => {
    var node = document.getElementById("_template");
    htmlToImage.toJpeg(node).then(function (dataUrl) {
      saveAs(dataUrl, "avatar.png");
    });
  };

  return (
    <div className="parent">
      {/* {console.log(props?.location?.state?.info)} */}
      <div>
        <div
          className="d-flex justify-content-center"
          id="_template"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "fit",
            height: "494px",
            width: "494px",
          }}
        >
          <div className="info">
            <div className="position text-right">
              {props?.location?.state?.info?.position}
            </div>
            <div
              style={{
                width: "250px",
                height: "250px",
                borderTopLeftRadius: "20%",
                borderBottomRightRadius: "23%",
                backgroundImage: `url("${props?.location?.state?.info?.photo}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <span>
              <div className="name p-1 text-center">
                {props?.location?.state?.info?.name}
              </div>
              <div className="text-center init p-1">
                <span style={{ paddingRight: "5px" }}>
                  {props?.location?.state?.info?.department}
                </span>
                <span
                  className="vertical-line"
                  style={{ paddingRight: "2.5px" }}
                ></span>
                <span
                  className="vertical-line"
                  style={{ paddingRight: "2.5px" }}
                ></span>
                <span style={{ paddingLeft: "5px" }}>
                  {props?.location?.state?.info?.designation ||
                    props?.location?.state?.info?.course}
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center  p-3">
          <button onClick={handleSubmit} className="btn p-2" id="valid_button">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;
