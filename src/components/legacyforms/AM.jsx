import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./forms.css";

const LegacyAM = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    photo: "",
    department: "",
    phoneNumber: "",
    position: "",
    designation: "",
    loading: false,
    error: "",
    redirectTo: false,
    formData: "",
    info: {},
  });

  const {
    name,
    email,
    phoneNumber,
    loading,
    error,
    redirectTo,
    formData,
    info,
  } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const registerUser = (data) => {
    return fetch("https://stark-lake-57888.herokuapp.com/api/v1/legacyAM", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      role="alert"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () => (
    <div className="socket">
      <div className="gel center-gel">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c1 r1">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c2 r1">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c3 r1">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c4 r1">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c5 r1">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c6 r1">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>

      <div className="gel c7 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>

      <div className="gel c8 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c9 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c10 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c11 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c12 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c13 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c14 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c15 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c16 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c17 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c18 r2">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c19 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c20 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c21 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c22 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c23 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c24 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c25 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c26 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c28 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c29 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c30 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c31 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c32 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c33 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c34 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c35 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c36 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c37 r3">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
    </div>
  );

  const showForm = () => {
    return (
      <form className="">
        <div className="form-group">
          <input
            type="text"
            className="form-control forms_inputs"
            id="uname_AM"
            placeholder="Enter Your Full Name (Surname First)"
            name="uname"
            value={name}
            onChange={handleChange("name")}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control forms_inputs"
            id="e_mail_AM"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={handleChange("email")}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control forms_inputs"
            id="phone_no_AM"
            placeholder="Enter Your Phone number"
            name="your_number"
            required
            value={phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
        </div>

        <div className="form-group">
          <select
            className="form-control forms_inputs"
            onChange={handleChange("department")}
            required
          >
            <option>Confirm Department</option>
            <option value="LegacyAM">LegacyAM</option>
          </select>
        </div>

        <div className="form-group custom-file">
          <label htmlFor="formFileMultiple" className="forms_inputs text-muted">
            Upload Your Profile Picture
          </label>
          <input
            className="form-control"
            accept="image/*"
            type="file"
            id="formFileMultiple"
            onChange={handleChange("photo")}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="">Select Position:</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="pos_AM"
              id="Aff_AM"
              value="Affiliate"
              onChange={handleChange("position")}
            />
            <label className="form-check-label" htmlFor="Aff_AM">
              Affiliate
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="">Select Designation:</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="des_AM"
              id="CCreate"
              value="Content Creator"
              onChange={handleChange("designation")}
            />
            <label className="form-check-label" htmlFor="CCreate">
              Content Creator
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="des_AM"
              id="DMark_AM"
              value="Digital Marketer"
              onChange={handleChange("designation")}
            />
            <label className="form-check-label" htmlFor="DMark_AM">
              Digital Marketer
            </label>
          </div>
        </div>
        <div className="form-group d-flex justify-content-center m-3 p-3">
          <button onClick={handleSubmit} className="btn p-2" id="valid_button">
            Next
          </button>
        </div>
      </form>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    registerUser(formData).then((result) => {
      if (result?.status === "fail" || result?.status === "error") {
        setValues({ ...values, error: result?.messsage });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          phoneNumber: "",
          department: "",
          error: "",
          loading: false,
          redirectTo: true,
          info: result?.data?.staff,
        });
      }
      // console.log(result);
    });
  };

  const redirectUser = () => {
    if (redirectTo) {
      return (
        <Redirect
          to={{
            pathname: "/greeting",
            state: { info },
          }}
        />
      );
    }
  };

  return (
    <div>
      {redirectUser()}
      <nav className="navbar navbar-expand-md navbar-dark">
        <Link className="navbar-brand" to="/">
          LegacyEA
        </Link>
      </nav>

      <section className="">
        <div className="container-fluid main_sect my-auto align-content-center">
          <div className="container-fluid mt-5">
            <div className="head_part">
              <h3 className="text-center">You are at:</h3>
            </div>

            <div className="main_content">
              <h2
                className="display-2 text-center legacy_head"
                style={{ color: "#ff7a01" }}
              >
                Legacy
                <span className="d-inline-flex">
                  <h1 className="" style={{ color: "aliceblue" }}>
                    Affiliate Marketing
                  </h1>
                </span>
              </h2>
              <h2 className="text-center">(LegacyAM)</h2>
            </div>
          </div>

          <div className="m-5">
            <p className="text-center">
              Ensure All Your Details Are Correct Before Proceeding
            </p>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-6 d-flex justify-content-center"
                style={{ borderRight: "2px solid #ff7a01" }}
              >
                <div className="w-75">
                  <div className="">
                    <h3 className="text-center" style={{ color: "#ff7a01" }}>
                      Sales funnel
                    </h3>
                    <p className="text-center sales_funnel ">
                      <span style={{ color: "#e60008" }}>Sales </span>
                      funnel (also known as a revenue funnel or sales process)
                      refers to the buying process that companies lead customers
                      through when purchasing products. The definition also
                      refers to the process through which a company finds,
                      qualifies, and sells its products to buyers.
                    </p>
                  </div>

                  <div className="">
                    <h3 className="text-center" style={{ color: "#ff7a01" }}>
                      LegacyAM
                    </h3>
                    <p className="text-center multichannel_marketing">
                      <span style={{ color: "#e60008" }}>Your </span>
                      digital compass, integrating the world via Affiliate
                      marketing and social promotions. Affording you the luxury
                      to earn with us.
                    </p>
                  </div>

                  <div className="">
                    <h3 className="text-center" style={{ color: "#ff7a01" }}>
                      Search Engine Optimization
                    </h3>
                    <p className="text-center seo">
                      <span style={{ color: "#e60008" }}>Search </span>
                      engine optimization (SEO) is the art and science of
                      getting pages to rank higher in search engines such as
                      Google. Because search is one of the main ways in which
                      people discover content online, ranking higher in search
                      engines can lead to an increase in traffic to a website.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="container">
                  {showError()}
                  {loading ? showLoading() : showForm()}
                </div>
              </div>
            </div>
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

export default LegacyAM;
