import React from 'react'
function App() {
	const isAdmin = true

	return <div>{isAdmin && <p>Вы администратор!</p>}</div>
}

export default App
