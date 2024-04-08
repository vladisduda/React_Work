import React from 'react'

// Можно сделать так, чтобы в переменной хранился не текст, а тег:

function App() {
	let text
	const show = true

	if (show) {
		text = <p>text1</p>
	} else {
		text = <p>text2</p>
	}

	return <div>{text}</div>
}
export default App
