import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    }
  }


  componentDidMount(){
    const name = this.props.match.params.class;
    axios.get(`http://localhost:3005/students?class=${name}`).then( results => {
    this.setState({
    students: results.data
  });
  console.log(results)
});
}

  render() {
    console.log(this.state.students)
    const studentList = this.state.students.map((el, i) => <Link to={`/student/${el.id}`}><h3 key={i}>{el.first_name} {el.last_name}</h3></Link>)
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentList}
      </div>
    )
  }
}