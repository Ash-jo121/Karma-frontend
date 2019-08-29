import React from 'react';
import jwt_decode from 'jwt-decode'

import { attendance, attendanceinput } from './UserFunctions'

import logo from '../logo.svg';
import '../App.css';
import Dropdown from './Dropdown3'
import Navigator from './Navigator'
import { BrowserRouter} from 'react-router-dom';
import './styles.css'


class Attendance extends React.Component {
  constructor() {
    super()
    this.state = {
        name: 'decoded.class',
        attendance: 'ecoded.attendance_C1',
        id:'',
        class:'',
      tableRows:[],
      errors: {}
      
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const userUpdate = {
      id: this.state.id,
      name:this.state.name,
      attendance: this.state.attendance,
    }

    attendanceinput(userUpdate).then(res => {
      if (res) {
       
        console.log(res)
      }
    
    })
  }

  


  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.first_name,
      attendance: decoded.attendance_C1,
      class: decoded.class,
    })

    const user = {
      email: this.state.email,
      password: this.state.password,
      class: decoded.class
    }


attendance(user).then(res => {
  if (res) {
    this.setState({
      tableRows: res
    })

    console.log(res)
  }
})

  }
    
      render() {
        return (
          <div className="profile_body">
            <div className="container profile_body">
              {this.state.class == 'X'?(
                    <div>
                    <br/>
                    <Dropdown/>
                    <br/>
                    <h3>OR</h3>
                    <br/>
                    <h3>Update Attendance</h3>
                    <br/>
            <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                <label htmlFor="id">ID</label>
                <br/>
                <input
                  type="id"
                  className="form-control"
                  name="name"
                  placeholder="Enter email"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <br/>
              <div className="form-group">
                <label htmlFor="name">New Attendance</label>
                <input
                  type="attendance"
                  className="form-control"
                  name="attendance"
                  placeholder="Enter your lastname name"
                  value={this.state.attendance}
                  onChange={this.onChange}
                />
              </div>
              <br/>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Update
              </button>
              </form>

                    </div>
            ) :
            (
              <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">Check</h1>
              </div>
              <table className="table col-md-6 mx-auto">
                <tbody>
                  <tr>
                    <td>Class</td>
                    <td>{this.state.name}</td>
                  </tr>
                  <tr>
                    <td>Attendance</td>
                    <td>{this.state.attendance}</td>
                  </tr>

                </tbody>
              </table>
            </div>
            
            )}
        

              
              </div>
            </div>
        );
      }
      
}

export default Attendance;