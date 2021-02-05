import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./forms.css";
import "./loading.css";

const LegacyCR = () => {
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
    return fetch("https://stark-lake-57888.herokuapp.com/api/v1/legacyCR", {
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

  const showForm = () => (
    <form>
      <div className="form-group">
        <input
          type="text"
          name="uname"
          className="form-control forms_inputs"
          placeholder="Enter Your Full Name (Surname First)"
          value={name}
          onChange={handleChange("name")}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          value={email}
          className="form-control forms_inputs"
          placeholder="Enter Your Email"
          onChange={handleChange("email")}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          value={phoneNumber}
          className="form-control forms_inputs"
          placeholder="Enter Your Phone number"
          onChange={handleChange("phoneNumber")}
          required
        />
      </div>

      <div className="form-group">
        <select
          placeholder="Department"
          className="form-control forms_inputs"
          onChange={handleChange("department")}
          required
        >
          <option>Confirm Department</option>
          <option value="LegacyCR">LegacyCR</option>
        </select>
      </div>

      <div className="form-group custom-file my-3">
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
        <label>Select Position:</label>
        <br />
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="pos_CR"
            id="Staff_CR"
            value="Staff"
            onChange={handleChange("position")}
          />
          <label className="form-check-label" htmlFor="Staff_CR">
            Staff
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="pos_CR"
            id="Intern_CR"
            value="Intern"
            onChange={handleChange("position")}
          />
          <label className="form-check-label" htmlFor="Intern_CR">
            Intern
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="pos_CR"
            id="Volunteer_CR"
            onChange={handleChange("position")}
            value="Volunteer"
          />
          <label className="form-check-label" htmlFor="Volunteer_CR">
            Volunteer
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
            name="des_CR"
            id="GDesign_CR"
            value="Graphics Designer"
            onChange={handleChange("designation")}
          />
          <label className="form-check-label" htmlFor="GDesign_CR">
            Graphics Designer
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="des_CR"
            id="MArts_CR"
            value="Motion Artist"
            onChange={handleChange("designation")}
          />
          <label className="form-check-label" htmlFor="MArts_CR">
            Motion Artist
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="des_CR"
            id="LSpec_CR"
            value="Logo Specialist"
            onChange={handleChange("designation")}
          />
          <label className="form-check-label" htmlFor="LSpec_CR">
            Logo Specialist
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="des_CR"
            id="Cartoons_CR"
            value="Cartoonist"
            onChange={handleChange("designation")}
          />
          <label className="form-check-label" htmlFor="Cartoons_CR">
            Cartoonist
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    registerUser(formData).then((result) => {
      if (result?.status === "fail" || result?.status === "error") {
        setValues({ ...values, error: result?.messsage, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          phoneNumber: "",
          department: "",
          error: "",
          redirectTo: true,
          loading: false,
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
                    Creations
                  </h1>
                </span>
              </h2>
              <h2 className="text-center">(LegacyCR)</h2>
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
                      Color Theory
                    </h3>
                    <p className="text-center color_theory">
                      <span style={{ color: "#e60008" }}>Lorem</span> ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <div className="">
                    <h3 className="text-center" style={{ color: "#ff7a01" }}>
                      Type Hierarchy
                    </h3>
                    <p className="text-center type_hierarch">
                      <span style={{ color: "#e60008" }}>Lorem</span> ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <div className="">
                    <h3 className="text-center" style={{ color: "#ff7a01" }}>
                      Retina Display
                    </h3>
                    <p className="text-center retina_display">
                      <span style={{ color: "#e60008" }}>Lorem</span> ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              All Rights Reserved. LegacyEA 2020
            </p>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default LegacyCR;
