import React, { useState } from 'react'
import User from './User'

function Users() {
	const [users, setUsers] = useState(initUsers)

	function toggleMode(id) {
		setUsers(prevUsers =>
			prevUsers.map(userItem =>
				userItem.id === id
					? { ...userItem, isEdit: !userItem.isEdit }
					: userItem
			)
		)
	}

	function editUser(id, field, event) {
		setUsers(prevUsers =>
			prevUsers.map(userItem =>
				userItem.id === id
					? { ...userItem, [field]: event.target.value }
					: userItem
			)
		)
	}

	const result = users.map(user => (
		<User
			key={user.id}
			id={user.id}
			name={user.name}
			age={user.age}
			isEdit={user.isEdit}
			toggleMode={toggleMode}
			editUser={editUser}
		/>
	))

	return <div>{result}</div>
}

export default Users
