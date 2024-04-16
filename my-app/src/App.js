import React from 'react'
import User from './User'

const id = () => Math.random()
const initUsers = [
	{ id: id(), name: 'user1', surname: 'surn1', age: 30 },
	{ id: id(), name: 'user2', surname: 'surn2', age: 31 },
	{ id: id(), name: 'user3', surname: 'surn3', age: 32 },
]

const App = () => {
	return (
		<div className='app'>
			{initUsers.map(user => (
				<User key={user.id} user={user} />
			))}
		</div>
	)
}

export default App
