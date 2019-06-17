import React, {Component} from 'react'
import MovieCard from './MovieCard'

export default class DashBoard extends Component {
 
  render() {
    const {movies, users, usersByMovie} = this.props
    return (
    	<ul>
			{Object.keys(movies).map(key => {
            	const userIds = usersByMovie[movies[key].id]
                return <MovieCard movies={movies} movieKey={key} users={users} userIds={userIds} />

			})}
		</ul>
    )
  }
  
}