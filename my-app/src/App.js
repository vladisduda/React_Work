import React, { useState } from 'react'

function App() {
	const [input1, setInput1] = useState('')
	const [input2, setInput2] = useState('')

	function handleInput1Change(event) {
		setInput1(event.target.value)
	}

	function handleInput2Change(event) {
		setInput2(event.target.value)
	}

	return (
		<div>
			<input value={input1} onChange={handleInput1Change} />
			<p>text1: {input1}</p>
			<input value={input2} onChange={handleInput2Change} />
			<p>text2: {input2}</p>
		</div>
	)
}

export default App
