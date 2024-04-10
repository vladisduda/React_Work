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

	const deleteNote = id => {
		setNotes(notes.filter(note => note.id !== id))
	}

	const loadNoteToInputs = id => {
		const note = notes.find(note => note.id === id)
		setProp1(note.prop1)
		setProp2(note.prop2)
		setProp3(note.prop3)
	}

	const updateNoteFromInputs = id => {
		setNotes(
			notes.map(note => {
				if (note.id === id) {
					note.prop1 = prop1
					note.prop2 = prop2
					note.prop3 = prop3
				}
				return note
			})
		)
	}

	return (
		<div>
			<ul>
				{notes.map(note => (
					<li key={note.id}>
						<span>{note.prop1}</span>
						<span>{note.prop2}</span>
						<span>{note.prop3}</span>
						<button onClick={() => deleteNote(note.id)}>Удалить</button>
						<button onClick={() => loadNoteToInputs(note.id)}>
							Загрузить в инпуты
						</button>
						<button onClick={() => updateNoteFromInputs(note.id)}>
							Обновить из инпутов
						</button>
					</li>
				))}
			</ul>
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
		</div>
	)
}

export default App
