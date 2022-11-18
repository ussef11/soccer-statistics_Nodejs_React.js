
import React, { Component } from "react";
import userService from "../Services/user.service";
import AddChannels from '../admin/addChannels'

class Admin extends Component   {
  constructor(props){
    super(props);

    this.state ={
        content:""
    }
  }
  componentDidMount(){
     userService.getAdminBoard().then((res)=>{
         this.setState(
            { 
                content : res.data
            }
         )
     }).catch((err)=>{
     console.log(err.response.data.message)
     })
      
  }
 




    render(){
    return ( 
        <div className="profile">
          <AddChannels/>
        </div>
     );
    }
}
 
export default Admin;