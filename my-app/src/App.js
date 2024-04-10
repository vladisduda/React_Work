import React, { useState } from 'react'

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5])
	const [newNoteText, setNewNoteText] = useState('')

	function addNewNote() {
		if (newNoteText.trim()) {
			setNotes([...notes, newNoteText])
			setNewNoteText('')
		}
	}

	function handleInputChange(event, index) {
		const updatedNotes = [...notes]
		updatedNotes[index] = event.target.value
		setNotes(updatedNotes)
	}

	function handleInputBlur(event, index) {
		const updatedNotes = [...notes]
		updatedNotes[index] = event.target.value
		setNotes(updatedNotes)
	}

	function reverseOrder() {
		setNotes([...notes].reverse())
	}

	const noteItems = notes.map((note, index) => (
		<li key={index}>
			<input
				type='text'
				value={note}
				onChange={e => handleInputChange(e, index)}
				onBlur={e => handleInputBlur(e, index)}
			/>
			<button onClick={() => setNotes(notes.filter((_, i) => i !== index))}>
				Удалить
			</button>
			<button
				onClick={() =>
					setNotes(notes.map((n, i) => (i === index ? n ** 2 : n)))
				}
			>
				Возвести в квадрат
			</button>
		</li>
	))

	return (
		<div>
			<ul>{noteItems}</ul>
			<input
				type='text'
				value={newNoteText}
				onChange={e => setNewNoteText(e.target.value)}
			/>
			<button onClick={addNewNote}>Добавить элемент</button>
			<button onClick={reverseOrder}>Перевернуть порядок</button>
		</div>
	)
}

export default App
