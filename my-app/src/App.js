import React from 'react'

function App() {
	function show1() {
		alert('вы нажали на первую кнопку')
	}

	function show2() {
		alert('вы нажали на вторую кнопку')
	}

	return (
		<div>
			<button onClick={show1}>первая кнопка</button>
			<button onClick={show2}>вторая кнопка</button>
		</div>
	)
}

export default App
