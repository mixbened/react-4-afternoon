import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentInfo: [],
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3005/students/${id}`).then( res => {
      this.setState({studentInfo: res.data});
    });
  }

  render() {

    return (
      <div className="box">
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    )
  }
}