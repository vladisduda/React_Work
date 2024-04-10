import React, { useState } from 'react'

function App() {
	const [value, setValue] = useState('')

	function handleChange(event) {
		setValue(event.target.value)
	}

	return (
		<div>
			<select value={value} onChange={handleChange}>
				<option>Tokyo</option>
				<option>New York</option>
				<option>London</option>
				<option>Paris</option>
			</select>
			<p>выбор пользователя: {value}</p>
		</div>
	)
}

export default App
