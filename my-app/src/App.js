import React, { useState } from 'react'

function App() {
	//№1
	const [notes, setNotes] = useState([1, 2, 3, 4, 5])

	function addNewNote() {
		const newNote = notes.length + 1
		setNotes([...notes, newNote])
	}

	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>
	})

	return (
		<div>
			<ul>{result}</ul>
			<button onClick={addNewNote}>Добавить элемент</button>
		</div>
	)
	//№2
	// const [notes, setNotes] = useState([1, 2, 3, 4, 5])
	// 	const [newNoteText, setNewNoteText] = useState('')

	// 	function addNewNote() {
	// 		if (newNoteText.trim()) {
	// 			setNotes([...notes, newNoteText])
	// 			setNewNoteText('')
	// 		}
	// 	}

	// 	const result = notes.map((note, index) => {
	// 		return <li key={index}>{note}</li>
	// 	})

	// 	return (
	// 		<div>
	// 			<ul>{result}</ul>
	// 			<input
	// 				type='text'
	// 				value={newNoteText}
	// 				onChange={e => setNewNoteText(e.target.value)}
	// 			/>
	// 			<button onClick={addNewNote}>Добавить элемент</button>
	// 		</div>
	// 	)
}

export default App
