import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";

class EditUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      description: ""
    };
  }

  updateHandler() {
    if (this.state.title === "") {
      this.setState({
        title: this.props.data.title
      });
    }
    if (this.state.description === "") {
      this.setState({
        description: this.props.data.description
      });
    }
    let { title, description } = this.state;
    let id = this.props.id;
    this.setState({
      id: id
    });
    if (this.state.title === "") {
      this.setState({
        name: title
      });
    } else if (this.state.description === "") {
      this.setState({
        email: description
      });
    } else {
      this.props.onUpdatedata(id, this.state);
      this.props.onHide();
    }
    console.log("state -------------------------- state", this.state);
  }

  onChangeHandler(event) {
    event.preventDefault();
    let { id, value } = event.target;
    this.setState({ [id]: value });
    console.log("state -------------------------- state", this.state);
  }
  render() {
    let id = this.props.id;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {console.log("props are here........", { ...this.props })}
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit user
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row w-50 m-auto p-1">
              <div className="col-4">
                <label>Id</label>
              </div>
              <div className="col-8">
                <input
                  className="form-control"
                  id="id"
                  value={id === "" ? null : this.props.id}
                  type="text"
                  readOnly
                />
              </div>
            </div>
            <div className="row w-50 m-auto p-1">
              <div className="col-4">
                <label>Title</label>
              </div>
              <div className="col-8">
                <input
                  className="form-control"
                  id="title"
                  // value={id === "" ? null : this.state.email}
                  defaultValue={id === "" ? null : this.props.data.title}
                  type="text"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </div>
            </div>
            <div className="row w-50 m-auto p-1">
              <div className="col-4">
                <label>Description</label>
              </div>
              <div className="col-8">
                <input
                  className="form-control"
                  id="description"
                  //value={id === "" ? null : this.props.data.rows[id].first_name}
                  defaultValue={id === "" ? null : this.props.data.description}
                  type="text"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={this.props.onHide}>
            Close
          </Button>
          <Button
            className="btn btn-success"
            onClick={this.updateHandler.bind(this)}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditUserModal;

// import React,{useState} from "react";
// import { Modal, Button } from "react-bootstrap";

// function EditUserModal(props) {
// const [value,setValue]=useState(0);
// const id=props.id ;

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       {console.log("props are here........", props)}
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">Edit user</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="container">
//         <div className="row w-50 m-auto p-1">
//             <div className="col-4">
//               <label>Id</label>
//             </div>
//             <div className="col-8">
//               <input className="form-control" id="id" value={id==="" ? null : props.data.rows[id].id} type="text" readOnly/>
//             </div>
//           </div>
//           <div className="row w-50 m-auto p-1">
//             <div className="col-4">
//               <label>Email</label>
//             </div>
//             <div className="col-8">
//               <input className="form-control" id="email" value={id==="" ? null : props.data.rows[id].email} type="text" />
//             </div>
//           </div>
//           <div className="row w-50 m-auto p-1">
//             <div className="col-4">
//               <label>Firstname</label>
//             </div>
//             <div className="col-8">
//               <input class="form-control" id="firstname" value={id==="" ? null : props.data.rows[id].first_name} type="text" />
//             </div>
//           </div>
//           <div className="row w-50 m-auto p-1">
//             <div className="col-4">
//               <label>Lastname</label>
//             </div>
//             <div className="col-8">
//               <input className="form-control" id="lastname" value={id==="" ? null : props.data.rows[id].last_name} type="text" />
//             </div>
//           </div>
//           <div className="row w-50 m-auto p-1">
//             <div className="col-4">
//               <label>AvatarID</label>
//             </div>
//             <div className="col-8">
//               <input className="form-control" readOnly id="avatarId" value={id==="" ? null : props.data.rows[id].avatar} type="text" />
//             </div>
//           </div>
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button className="btn btn-danger" onClick={props.onHide}>
//           Close
//         </Button>
//         <Button className="btn btn-success" >
//           Update
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditUserModal;
