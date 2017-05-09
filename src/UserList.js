import React, {Component} from 'react';
import UserData from './UserData';

import './UserList.css';

class UserList extends Component{

  render(){
    return(
      <div className="col-md-9">
        <table className="user-list">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
            </tr>
          </thead>

            <UserData data={this.props.data} update={this.props.update}/>

        </table>
      </div>
    )
  }
}

export default UserList;
