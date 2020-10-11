import React from 'react';

class Student extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: 'https://github.com/sbkzoomin.png',
      name: "Bharat Kumar",
      age: "27",
      course: 'MCA',
      location: 'Hyderabad'
    }
  }

  render(){
    return(
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
              <div className="col">
                <div className="card">
                    <div className="card-header">
                      <p className="h4">Student Details</p>
                      </div>
                      <div className="card-body">
                          <div className="row">
                            <div className="col-md-4">
                                <img src={this.state.image} className="img-fluid img-thumbnail"/>
                            </div>
                            <div className="col-md-8">
                                <ul className="list-group">
                                  <li className="list-group-item">Name: {this.state.name}</li>
                                  <li className="list-group-item">Age: {this.state.age}</li>
                                  <li className="list-group-item">Course: {this.state.course}</li>
                                  <li className="list-group-item">Location: {this.state.location}</li>
                                </ul>
                            </div>
                          </div>
                      </div>
                </div>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Student;