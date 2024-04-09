import React, { useState } from 'react'

function App() {
	const [isBanned, setIsBanned] = useState(false)

	function banUser() {
		setIsBanned(true)
	}

	function unbanUser() {
		setIsBanned(false)
	}

	return (
		<div>
			<span>
				{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}
			</span>
			<br />
			{isBanned ? (
				<button onClick={unbanUser}>Разбанить пользователя</button>
			) : (
				<button onClick={banUser}>Забанить пользователя</button>
			)}
		</div>
	)
}

export default App
