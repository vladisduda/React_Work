import React from 'react'

function App() {
	const arr = ['a', 'b', 'c', 'd', 'e']

	const listItems = arr.map((item, index) => <li key={index}>{item}</li>)

	return <ul>{listItems}</ul>
}

export default App
