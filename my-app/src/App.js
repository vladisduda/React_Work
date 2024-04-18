import React from 'react'
import User from './User'

const generateId = () => Math.random()

const initUsers = [
	{
		id: generateId(),
		name: 'user1',
		surname: 'surn1',
		age: 30,
		isEdit: true,
	},
	{
		id: generateId(),
		name: 'user2',
		surname: 'surn2',
		age: 31,
		isEdit: false,
	},
	{
		id: generateId(),
		name: 'user3',
		surname: 'surn3',
		age: 32,
		isEdit: false,
	},
]

const App = () => {
	return (
		<div className='app'>
			{initUsers.map(user => (
				<User
					key={user.id}
					name={user.name}
					surname={user.surname}
					age={user.age}
					isEdit={user.isEdit}
				/>
			))}
		</div>
	)
}

export default App
