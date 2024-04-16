import React from 'react'
import User from './User'
const id = () => Math.random()
const users = [
	{ id: id(), name: 'user1', surn: 'surn1', age: 30 },
	{ id: id(), name: 'user2', surn: 'surn2', age: 31 },
	{ id: id(), name: 'user3', surn: 'surn3', age: 32 },
]

function App() {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Surname</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<User key={user.id} {...user} />
					))}
				</tbody>
			</table>
		</div>
	)
}

export default App
