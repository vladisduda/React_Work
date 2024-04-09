import React from 'react'

function App() {
	const users = [
		{ id: 1, name: 'user1', surn: 'surn1', age: 30 },
		{ id: 2, name: 'user2', surn: 'surn2', age: 31 },
		{ id: 3, name: 'user3', surn: 'surn3', age: 32 },
	]

	return (
		<ul>
			{users.map(user => (
				<li key={user.id}>
					Имя: {user.name}, Фамилия: {user.surn}, Возраст: {user.age}
				</li>
			))}
		</ul>
	)
}

export default App
