import React, { Component } from "react";
import PropTypes from "prop-types";

class Profile extends Component{
  render (){
      const inlinestyle={color:'red',padding:"100Px"}
      return (
          <div style={inlinestyle}>
            <h1>my name is {this.props.fullname} </h1>
            <p>i'm {this.props.bio} </p>
            <h3>i work as a {this.props.profession} </h3>
            {this.props.children}
            <br />
            <button onClick={this.props.doSmthng}>click here</button>
            
          </div>
      )
  }
}
const handle=()=>{
    alert('run');
}

Profile.defaultProps = {
    fullname:'medamine',
    bio:"a simple guy",
    profession:"a delivery guy",
    doSmthng:handle,
  };
Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    doSmthng: PropTypes.func,
  }
export default Profile;