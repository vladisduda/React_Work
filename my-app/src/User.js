import React from 'react'

const User = ({ user }) => {
	return (
		<div className='user'>
			<p>Name: {user.name}</p>
			<p>Surname: {user.surname}</p>
			<p>Age: {user.age}</p>
			<br />
		</div>
	)
}

export default User
