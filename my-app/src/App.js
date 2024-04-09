import React, { useState } from 'react'

function App() {
	const [age, setAge] = useState(0)
	const [fahrenheit, setFahrenheit] = useState(0)

	function handleAgeChange(event) {
		setAge(event.target.value)
	}

	function handleFahrenheitChange(event) {
		setFahrenheit(event.target.value)
	}

	const currentYear = new Date().getFullYear()
	const birthYear = currentYear - age
	const celsius = ((fahrenheit - 32) * 5) / 9

	return (
		<div>
			<p>№1</p>
			<input type='number' value={age} onChange={handleAgeChange} />
			<p>Год рождения: {birthYear}</p>

			<p>№2</p>
			<input
				type='number'
				value={fahrenheit}
				onChange={handleFahrenheitChange}
			/>
			<p>Градусы Цельсия: {celsius.toFixed(2)}</p>
		</div>
	)
}

export default App
