import React, {Component} from 'react'

class UserList extends Component {
  
  render() {
    return (
      <ul>
      {this.props.users && this.props.users.map(user => (
        <li key={user.id}>{user.name}</li>
       ))}
  
      {!this.props.users &&
        <p>None of the current users liked this movie</p>
      }
      </ul>
      )
  }
}

export default UserList