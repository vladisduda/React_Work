import React, { useState } from 'react'

const initNotes = [
	{
		id: 1,
		name: 'name1',
		desc: 'long description 1',
		show: false,
	},
	{
		id: 2,
		name: 'name2',
		desc: 'long description 2',
		show: false,
	},
	{
		id: 3,
		name: 'name3',
		desc: 'long description 3',
		show: false,
	},
]

function App() {
	const [notes, setNotes] = useState(initNotes)

	const toggleShow = id => {
		setNotes(
			notes.map(note => {
				if (note.id === id) {
					note.show = !note.show
				}
				return note
			})
		)
	}

	return (
		<div>
			{notes.map(note => (
				<p key={note.id}>
					{note.name},{note.show && <i>{note.desc}</i>}
					<br />
					<button onClick={() => toggleShow(note.id)}>
						{note.show ? 'Скрыть описание' : 'Показать описание'}
					</button>
				</p>
			))}
		</div>
	)
}

export default App
