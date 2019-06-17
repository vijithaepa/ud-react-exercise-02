import React, {Component} from 'react'
import UserList from './UserList'

export default class MovieCard extends Component {
 
  render (){
    const {movies, movieKey, users, userIds} = this.props
    return (
      	<li key={movies[movieKey].id}>
          <h2>{movies[movieKey].name}</h2>
          <p>Liked By:</p>
          <UserList users={userIds ? userIds.map(id => users[id]): null}/>
		</li>
    )
}
}