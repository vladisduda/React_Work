import React, { useState } from 'react'

const App = () => {
	const [name, setName] = useState('Имя')
	const [surname, setSurname] = useState('Фамилия')

	const changeName = () => setName('Новое имя')
	const changeSurname = () => setSurname('Новая фамилия')

	return (
		<div>
			<p>Имя: {name}</p>
			<p>Фамилия: {surname}</p>
			<button onClick={changeName}>Изменить имя</button>
			<button onClick={changeSurname}>Изменить фамилию</button>
		</div>
	)
}

export default App
