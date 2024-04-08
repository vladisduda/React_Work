import React from 'react'

function App() {
	function showMess(text) {
		alert(text)
	}
	return (
		<div>
			<button onClick={() => showMess('1')}>1</button>
			<button onClick={() => showMess('2')}>2</button>
			<button onClick={() => showMess('3')}>3</button>
		</div>
	)
}

export default App
