import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../component/login/Login.css";
import { withRouter } from "react-router-dom";
import logo from "../../asset/images/logo.png";
import twitterLogo from "../../asset/images/twitter.png";
import Twitter from "../../common/modal/TwitterModal";
import EditUserModal from "../modal/EditUserModal";
import { addList } from "../../api/api";
import Swal from "sweetalert2";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      addModalShow: false
    };
  }
  updateHandler = async (id, data) => {
    let result = await addList(data);
    if (result) {
      Swal.fire({
        title: "User Added Successful",
        text: "Updating page",
        icon: "success",
        timer: 1000
      });
      this.props.history.push("/completed");
    }
  };
  onClickHandler() {
    localStorage.clear();
    this.props.history.push("/");
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* <a className="navbar-brand  textDecore" href="/dashboard" >
            Welcome  ({localStorage.getItem("userName")})
          </a>*/}
          {/* <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"></button> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src={logo} alt="logo" style={{ width: "4%" }} />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <Link className="nav-link  textDecore" to="/dashboard">
                  {" "}
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link  textDecore" to="/pending">
                  {" "}
                  Pending <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link  textDecore" to="/completed">
                  {" "}
                  Completed <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => this.setState({ addModalShow: true })}
                >
                  Add Todo
                </button>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <i>
                <img
                  src={twitterLogo}
                  className="float-right mr-5"
                  style={{ width: "4%" }}
                  alt="twitter"
                  onClick={() => this.setState({ modalShow: true })}
                />
              </i>
              <button
                className="btn btn-outline-dark my-2 my-sm-0"
                type="button"
                onClick={this.onClickHandler.bind(this)}
              >
                Logout
              </button>
            </form>
          </div>
        </nav>

        <Twitter
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
        <EditUserModal
          id=""
          data=""
          show={this.state.addModalShow}
          onHide={() => this.setState({ addModalShow: false })}
          onUpdatedata={this.updateHandler}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(Navigation);
