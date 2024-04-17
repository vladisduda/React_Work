import React, { useState } from 'react'

const User = ({ user }) => {
	const [isBanned, setIsBanned] = useState(false)

	const handleBanClick = () => {
		setIsBanned(true)
	}

	return (
		<div className='user'>
			<p>id: {user.id}</p>
			<p>Name: {user.name}</p>
			<p>Surname: {user.surname}</p>
			<p>Age: {user.age}</p>
			{isBanned ? (
				<p style={{ color: 'red' }}>Пользователь в бане</p>
			) : (
				<button onClick={handleBanClick}>Забанить пользователя</button>
			)}
			<br />
		</div>
	)
}

export default User
