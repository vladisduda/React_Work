import React, { useState } from 'react'

function App() {
	const [showContent, setShowContent] = useState(false)

	const toggleContent = () => {
		setShowContent(!showContent)
	}

	return (
		<div>
			№1
			<br />
			<label htmlFor='ageCheckbox'>Есть ли вам уже 18 лет?</label>
			<input type='checkbox' id='ageCheckbox' onChange={toggleContent} />
			{showContent ? (
				<div>
					<h2>Ура, вам уже есть 18</h2>
					<p>Здесь расположен контент только для взрослых.</p>
				</div>
			) : (
				<div>
					<p>Увы, вам еще нет 18 лет :(</p>
				</div>
			)}
			№2
			<br />
			<label htmlFor='visibilityCheckbox'>Показать/скрыть абзац</label>
			<input
				type='checkbox'
				id='visibilityCheckbox'
				onChange={() => {
					const paragraph = document.getElementById('content')
					paragraph.style.display =
						paragraph.style.display === 'none' ? 'block' : 'none'
				}}
			/>
			<p id='content'>Этот абзац видимый по умолчанию</p>
		</div>
	)
}

export default App
