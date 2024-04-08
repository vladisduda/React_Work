import React from 'react'
function App() {
	const isAuth = false

	return <div>{isAuth === false && <p>Пожалуйста, авторизуйтесь</p>}</div>
}

export default App
