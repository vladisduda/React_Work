import React, { useState } from 'react'

function App() {
	const [number, setNumber] = useState(0)

	function increaseNumber() {
		setNumber(number + 1)
	}

	function decreaseNumber() {
		if (number > 0) {
			setNumber(number - 1)
		}
	}

	return (
		<div>
			<p>Число: {number}</p>
			<button onClick={increaseNumber}>Увеличить число</button>
			<button onClick={decreaseNumber}>Уменьшить число</button>
		</div>
	)
}

export default App
