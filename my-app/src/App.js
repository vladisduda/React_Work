import React, { useState } from 'react'

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

	function changeHandler(index, event) {
		setNotes([
			...notes.slice(0, index),
			event.target.value,
			...notes.slice(index + 1),
		])
	}
	function getARM(arr) {
		const sum = arr.reduce((acc, val) => acc + parseFloat(val), 0)
		const average = sum / arr.length
		return average
	}
	const result = notes.map((note, index) => {
		return (
			<input
				key={index}
				value={note}
				onChange={event => changeHandler(index, event)}
			/>
		)
	})

	return (
		<div>
			<p>Cреднее арифметическое элементов = {getARM(notes)}</p>
			<br />
			{result}
		</div>
	)
}

export default App
