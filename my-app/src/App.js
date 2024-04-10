import React, { useState } from 'react'

function App() {
	const [date, setDate] = useState({
		year: 2025,
		month: 12,
		day: 31,
	})

	function handleInputChange(event, field) {
		const newValue = parseInt(event.target.value, 10)
		setDate({ ...date, [field]: newValue })
	}

	const dateObject = new Date(date.year, date.month - 1, date.day)
	const dayOfWeek = dateObject.toLocaleString('default', { weekday: 'long' })

	return (
		<div>
			<p>Год: {date.year}</p>
			<p>Месяц: {date.month}</p>
			<p>День: {date.day}</p>
			<p>День недели: {dayOfWeek}</p>

			<input
				type='number'
				value={date.year}
				onChange={e => handleInputChange(e, 'year')}
			/>
			<input
				type='number'
				value={date.month}
				onChange={e => handleInputChange(e, 'month')}
			/>
			<input
				type='number'
				value={date.day}
				onChange={e => handleInputChange(e, 'day')}
			/>
		</div>
	)
}

export default App
