import React from 'react'

function App() {
	function func(event) {
		console.log(event) // объект с событием
	}
	function func1(event) {
		console.log(event.target) // event target of the click
	}
	return (
		<div>
			<button onClick={func}>event</button>
			<button onClick={func1}>event.target</button>
		</div>
	)
}

export default App
