import React from 'react'
import Product from './Product'
import User from './User' // Подключаем компонент User

function App() {
	return (
		<div>
			<Product />
			<User /> {/* Выводим компонент User */}
		</div>
	)
}

export default App
