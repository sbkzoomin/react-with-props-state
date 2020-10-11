import React from 'react';

class MessageCard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {name,age,designation} = this.props;
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-8">
              <div className="card bg-light">
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Name : {name}</li>
                    <li className="list-group-item"> Age : {age}</li>
                    <li className="list-group-item"> Designation : {designation}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MessageCard;