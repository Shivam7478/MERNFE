import React, { Component } from 'react';
import Particles from "react-particles-js";
import "../login/Login.css";
import Signup from '../signup/Signup'
import Login from '../login/Login'
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            route:false
        }
    }
    creactAcc=()=>{
        this.setState({route:true})
    }
    openSignUp=()=>{
        this.setState({route:false})
    }
    render() {
        return (
            <div className="wrapper">
            <div className="row"> 
              <div className="col-sm-9 p-0 BgImage">
              <Particles
                 height="100vh"
                  params={{
                    particles: {
                      number: {
                        value: 100
                      },
                      size: {
                        value: 5
                      },
                      color: { value: "#000000" },
                      line_linked:{
                        enable_auto:true,
                        distance:100,
                        color:"#000000"
                      }
                    },
                    interactivity: {
                      events: {
                        onhover: {
                          enable: true,
                          mode: "repulse"
                        }
                      }
                    }
                  }}
                
                 
                />
              </div>
              <div className="col-sm-3" style={{backgroundColor:"rgba(252,227,222,0.7)"}}>

            
{    this.state.route?<Signup openSignUp={this.openSignUp}/>:  <Login 
                  creactAcc={this.creactAcc}
              />
}              </div>
            </div>
             
               
                
              </div>
        );
    }
}

export default Main;