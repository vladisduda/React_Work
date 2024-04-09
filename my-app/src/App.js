import React, { useState } from 'react'

function App() {
	const [text, setText] = useState('')

	function handleChange(event) {
		setText(event.target.value)
	}

	return (
		<div>
			<input type='text' value={text} onChange={handleChange} />
			<p>Количество символов: {text.length}</p>
		</div>
	)
}

export default App
