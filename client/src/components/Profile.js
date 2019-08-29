
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import './styles.css'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: 'Ha',
      last_name: 'Hi',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email    
    })
  }

  render() {
    return (
      <body>
      <div className="profile_body">
        <div className="container">
        {/*
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
        */}
          <br/>
          <h1 className="text-center">PROFILE</h1>
          <br/>
        </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td className="profile_text">First Name</td>
                <td className="profile_text">{this.state.first_name}</td>
              </tr>
               <tr>
                <td className="profile_text">Last Name</td>
                <td className="profile_text">{this.state.last_name}</td>
              </tr>
              <tr>
                <td className="profile_text">Email</td>
                <td className="profile_text">{this.state.email}</td>
              </tr>
            </tbody>
         </table>
        {/*
        </div>
      </div>
        */}
        </div>
      </body>
    )
  }
}

export default Profile