import React, { useState } from 'react'

const App = () => {
	const [name, setName] = useState('Максим')
	const [surname, setSurname] = useState('Русый')
	const [age, setAge] = useState('14')

	return (
		<div>
			<p>Имя: {name}</p>
			<p>Фамилия: {surname}</p>
			<p>Возраст: {age}</p>
		</div>
	)
}

export default App
