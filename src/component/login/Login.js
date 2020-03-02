import React, { Component } from "react";
import { FaUserAlt, FaKey } from "react-icons/fa";
import { userLogin } from "../../api/api";
import { connect } from "react-redux";
import {Redirect } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import "./Login.css";
import Swal from "sweetalert2";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: {
        username: "",
        password: ""
      },
      flag: false
    };
  }
  async onSubmitHandler(event) {
    event.preventDefault();
    if(this.state.username!=="" && this.state.password!==""){
    localStorage.setItem("userName", this.state.username);
    this.props.method(this.state.username);
    try {
      let result = await userLogin(this.state.username, this.state.password);
      console.log("ffdfdf",result);
      if (result) {
        //localStorage.setItem("token","sgfuysdfiajuda23678");
        localStorage.setItem("token",result.data.token);
        Swal.fire({
          title: "Login Successful",
          text: "Moving to login page",
          icon: "success",
          timer: 1000
        });
        console.log("Lofinpage ",this.props);
       this.props.history.push("/dashboard");
      }
    } catch (error) {
      Swal.fire({
        title: "Invalid Username Password",
        text: "Please Check Username Or Password",
        icon: "warning",
        timer: 1000
      });
      console.log(error);
    }
  }
  else
  {
   let {username,password}=this.state;
   if(!username){
     this.setState(
       {
         error:{
                username:"Please enter username"
               }
       })}
       if(!password){
        this.setState(
          {
            error:{
                   password:"Please enter password"
                  }
          })}
  }
  }  

   googleResponse=(result)=>{
     if(result){
     localStorage.setItem("token","sgfuysdfiajuda23678");
    this.props.history.push("/dashboard");

   }

    console.log("result",result);
  }
  onChangeHandler(event) {
    event.preventDefault();
    let error = this.state.error;
    let { id, value } = event.target;
    switch (id) {
      case "username":
        error.username =
          value.length < 3 ? "Username must be 3 characters long" : "";
        break;
      case "password":
        error.password = value.length < 1 ? "Please enter password" : "";
        break;
      default:
        this.setState({ flag: true });
        break;
    }
    this.setState({
      error,
      [id]: value
    });
  }
  

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.onSubmitHandler.bind(this)}>
            <div className="form-group pt-5  text-center ">
              <h1>Login</h1>
              <div className="row p-2">
                <div className="col-sm-2">
                  <FaUserAlt className="" />
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control float-left postion-relative feb-2020feb 2021feb 2022"
                    placeholder="Enter username"
                    id="username"
                    onChange={this.onChangeHandler.bind(this)}
                  />
                  <small style={{ color: "red" }}>
                    {this.state.error.username}
                  </small>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-sm-2">
                  <FaKey className="" />
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
              <div className="row p-2">
                <div className="m-auto">
                  <button type="submit" className="btn btn-dark">
                    login
                  </button>
                </div>
              </div>
              <div className="row p-2">
                <div className="m-auto">
                  {/* <a href="/Signup">Create an Account</a> */}
                <p className='text-primary' style={{cursor:"pointer"}} onClick={this.props.creactAcc}> Create account</p>
                <p style={{cursor:"pointer"}}> <b>OR</b></p>
                <GoogleLogin
    clientId="409243819863-dv0797n80684l5i7a05lnig74tvljkd6.apps.googleusercontent.com"
    onSuccess={this.googleResponse}
    onFailure={err=>{console.log("error",err)}} 
  />
                </div>

              </div>
            </div>
          </form>
          </div>
    
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    method: name => {
      dispatch({ type: "userInfo", data: name });
    }
  };
};

export default withRouter( connect(null, mapDispatchToProps)(Login));
