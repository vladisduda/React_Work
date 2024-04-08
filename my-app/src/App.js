import React from 'react'

function App() {
	const isAdult = true

	return (
		<div>
			{isAdult ? (
				<p>Вы уже совершеннолетний!</p>
			) : (
				<p>Вы еще не достигли 18 лет.</p>
			)}
		</div>
	)
}

export default App
