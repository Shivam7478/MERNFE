import React, { Component } from "react";
import Card from "../../common/card/Card";
import {
  pendingList,
  completedList,
  deleteUserInfo,
  deleteList,
  updateList
} from "../../api/api";
import { MDBDataTable, MDBIcon } from "mdbreact";
import EditUserModal from "../../common/modal/EditUserModal";
import Navigation from "../../common/navbar/Navigation";
import Swal from "sweetalert2";

class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pending: [],
      modalShow: false,
      id: ""
    };
    // this.getUserData=this.getUserData.bind(this);
  }

  updateHandler = async (id, value) => {
    console.log("resut----->", id, value);
    try {
      let result = await updateList(id, value);

      if (result) {
        this.pendingList();
        Swal.fire({
          title: "User Updated Successful",
          text: "Updating page",
          icon: "success",
          timer: 1000
        });
      }
    } catch (error) {
      console.log("erooorrrrr----------->", error);
      Swal.fire({
        title: "Unsucessful List  Updated ",
        text: "Please check all the fields",
        icon: "warning",
        timer: 1000
      });
    }
  };
  deleteUser = id => {
    Swal.fire({
      title: "Are you sure want to delete ?",
      text: "This  will delete current user..",
      icon: "warning",
      showCancelButton: true
    }).then(async result => {
      if (result.value) {
        try {
          let result = await deleteList(id);
          if (result) {
            this.pendingList();
            Swal.fire({
              title: "Your file get Deleted",
              icon: "success",
              timer: 1000
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  pendingList = async () => {
    let result = await pendingList();
    console.log("result", result);

    if (result) {
      this.setState({ pending: result });
    }
  };

  componentDidMount() {
    this.pendingList();
  }
  render() {
    let pending = this.state.pending.data;
    return (
      <div>
        <Navigation />

        <div className="container">
          <div className="row">
            {/* <MDBDataTable striped bordered hover data={this.state.finalData} /> */}
            {pending
              ? pending.map((item, i) => (
                  <Card
                    onModalShow={() =>
                      this.setState({
                        modalShow: true,
                        id: item._id,
                        data: item
                      })
                    }
                    onDeleteUser={() => this.deleteUser(item._id)}
                    item={item}
                    i={i}
                  />
                ))
              : null}
          </div>
          <EditUserModal
            id={this.state.id}
            data={this.state.data}
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
            onUpdatedata={this.updateHandler}
          />
        </div>
      </div>
    );
  }
}

export default Aboutus;
