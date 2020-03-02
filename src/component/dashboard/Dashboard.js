import React, { Component } from 'react';
import Navigation from '../../common/navbar/Navigation';
import CarouselSlide from  './CarouselSlide'
import {connect} from 'react-redux';
class Dashboard extends Component {
    render() {
        const {userInfo}=this.props;
        return (
            <div>
                <Navigation name={userInfo}/>
                <CarouselSlide/>
            </div>
            
        );
    }
}

const mapStateToProps=(state)=>{
    console.log("sfhudhfhsdufh",state);
    return{
        userInfo:state
    }
}           

export default connect(mapStateToProps)(Dashboard);