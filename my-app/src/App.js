import React from 'react'
function App() {
	const age = 19

	return (
		<div>
			{age > 18 ? (
				<p>Вы совершеннолетний!</p>
			) : (
				<p>Вы еще не достигли 18 лет.</p>
			)}
		</div>
	)
}

export default App
