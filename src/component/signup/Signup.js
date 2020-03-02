import React, { Component } from "react";
import Swal from "sweetalert2";
import "../login/Login.css";
import {withRouter} from 'react-router-dom';
import Particles from "react-particles-js";
import { FaUserAlt, FaKey,FaMailBulk } from "react-icons/fa";
import { userRegistration } from "../../api/api";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      cpassword: null,
      error: {
        name: "",
        email: "",
        password: "",
        cpassword: ""
      }
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
  
    try {
      let result = await userRegistration(
        this.state
      );
      console.log("resut----->", result);
      if (result) {
        Swal.fire({
          title: "User Registration Successful",
          text: "Moving to login page",
          icon: "success",
          timer: 1000
        });
        this.props.openSignUp();
          //this.props.history.push("/");
      }
    } catch (error) {
      Swal.fire({
        title: "Unsucessful User  Registration ",
        text: "Please check all the fileds",
        icon: "warning",
        timer: 1000
      });
    }
  }
  
  onChangeHandler(event) {
    event.preventDefault();

    let error = this.state.error;
    let { id, value } = event.target;
    switch (id) {
      case "name":
        error.first_name =
          value.length < 3 ? "Name must be 3 characters long" : "";
        break;
      case "password":
        error.password = value.length < 1 ? "Please enter password" : "";
        break;
      case "cpassword":
        error.cpassword =
          this.state.password !== value ? "password should match" : "";
        break;
          case "email":
            error.email =
              value.length < 3 ? "Please Enter Valid Email" : "";
            break;
      default:
        break;
    }
    this.setState({
      error,
      [id]: value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group pt-5 m-auto text-center">
          <h1>Sign Up</h1>
          <div className="row pt-2">
            <div className="col-sm-2">
              <FaUserAlt />
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control postion-relative"
                placeholder="Enter Your Name"
                id="name"
                onChange={this.onChangeHandler.bind(this)}
              />
              <small style={{ color: "red" }}>
                {this.state.error.first_name}
              </small>
            </div>
          </div>
          {/* <div className="row pt-2">
            <div className="col-sm-2">
              <FaUserAlt />
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control postion-relative"
                placeholder="Enter Last Name"
                id="last_name"
                onChange={this.onChangeHandler.bind(this)}
              />
              <small style={{ color: "red" }}>
                {this.state.error.last_name}
              </small>
            </div>
          </div> */}
          <div className="row pt-2">
                      <div className="col-sm-2">
                        <FaMailBulk  />
                      </div>
                      <div className="col-sm-8">
                        <input
                          type="mail"
                          className="form-control postion-relative"
                          placeholder="Enter Email"
                          id="email"
                          onChange={this.onChangeHandler.bind(this)}
                        />
                        <small style={{ color: "red" }}>{this.state.error.email}</small>
                      </div>
                    </div>
          <div className="row pt-2">
            <div className="col-sm-2">
              <FaKey />
            </div>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="password"
                onChange={this.onChangeHandler.bind(this)}
              />
              <small style={{ color: "red" }}>
                {this.state.error.password}
              </small>
            </div>
          </div>

          <div className="row pt-2">
            <div className="col-sm-2">
              <FaKey />
            </div>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Confirm Password"
                id="cpassword"
                onChange={this.onChangeHandler.bind(this)}
              />
              <small style={{ color: "red" }}>
                {this.state.error.cpassword}
              </small>
            </div>
          </div>

          <div className="row pt-2">
            <div className="m-auto">
              <button type="submit" className="btn btn-dark">
                Sign Up
              </button>
            </div>
          </div>
          <div className="row pt-2">
            <div className="m-auto">
              <label>
                Already Have Account{" "}
                <p
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={this.props.openSignUp}
                >
                  login Here
                </p>
              </label>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Signup);
