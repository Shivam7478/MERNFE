import React, { Component } from "react";
import Card from "../../common/card/Card";
import {
  pendingList,
  completedList,
  deleteUserInfo,
  deleteList,
  updateList,
  updateUserInfo
} from "../../api/api";
import { MDBDataTable, MDBIcon } from "mdbreact";
import EditUserModal from "../../common/modal/EditUserModal";
import Navigation from "../../common/navbar/Navigation";
import Swal from "sweetalert2";
class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: [],
      modalShow: false,
      id: ""
    };
    // this.getUserData=this.getUserData.bind(this);
  }

  updateHandler = async (id, value) => {
    console.log("result--------------->", id, value);
    try {
      let result = await updateList(id, value);
      console.log("resut----->", result);
      if (result) {
        this.completedList();
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
        title: "Unsucessful User  Updating ",
        text: "Please check all the fileds",
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
            this.completedList();
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

  completedList = async () => {
    let result = await completedList();
    console.log("completed", result);
    if (result) {
      this.setState({ completed: result });
    }
  };
  componentDidMount() {
    this.completedList();
  }
  render() {
    let completed = this.state.completed.data;
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row">
            {/* <MDBDataTable striped bordered hover data={this.state.finalData} /> */}
            {completed
              ? completed.map((item, i) => (
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

export default Completed;
