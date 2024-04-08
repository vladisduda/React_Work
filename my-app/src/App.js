import React from 'react'
function App() {
	const isAuth = true

	return <div>{isAuth && <p>Вы авторизованы</p>}</div>
}

export default App
