import React, { useState } from 'react'

const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
]

function App() {
	const [notes, setNotes] = useState(initNotes)
	const [prop1, setProp1] = useState('')
	const [prop2, setProp2] = useState('')
	const [prop3, setProp3] = useState('')

	const addNote = () => {
		const newNote = {
			id: Math.random().toString(36).substr(2, 9),
			prop1: 'newValue1',
			prop2: 'newValue2',
			prop3: 'newValue3',
		}
		setNotes([...notes, newNote])
	}

	const addNoteFromInput = () => {
		const newNote = {
			id: Math.random().toString(36).substr(2, 9),
			prop1: prop1,
			prop2: prop2,
			prop3: prop3,
		}
		setNotes([...notes, newNote])
	}

	return (
		<div>
			<ul>
				{notes.map(note => (
					<li key={note.id}>
						<span>{note.prop1}</span>
						<span>{note.prop2}</span>
						<span>{note.prop3}</span>
					</li>
				))}
			</ul>
			<button onClick={addNote}>Добавить заметку</button>
			<br />
			<input
				type='text'
				value={prop1}
				onChange={e => setProp1(e.target.value)}
			/>
			<input
				type='text'
				value={prop2}
				onChange={e => setProp2(e.target.value)}
			/>
			<input
				type='text'
				value={prop3}
				onChange={e => setProp3(e.target.value)}
			/>
			<button onClick={addNoteFromInput}>Добавить заметку из инпута</button>
		</div>
	)
}

export default App
