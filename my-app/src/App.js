import React, { useState } from 'react'

function App() {
	const [selectedRadio, setSelectedRadio] = useState('')

	const handleRadioChange = event => {
		setSelectedRadio(event.target.value)
	}

	return (
		<div>
			<input
				type='radio'
				name='radio'
				value='1'
				checked={selectedRadio === '1'}
				onChange={handleRadioChange}
			/>
			<label htmlFor='1'>Python</label>

			<input
				type='radio'
				name='radio'
				value='2'
				checked={selectedRadio === '2'}
				onChange={handleRadioChange}
			/>
			<label htmlFor='2'>C++</label>

			<input
				type='radio'
				name='radio'
				value='3'
				checked={selectedRadio === '3'}
				onChange={handleRadioChange}
			/>
			<label htmlFor='3'>JavaScript</label>

			<p>Выбрана радиокнопка с значением: {selectedRadio}</p>

			{selectedRadio === '3' && (
				<p>
					Вы выбрали язык программирования JavaScript.
					<br />
					Молодец!
				</p>
			)}
		</div>
	)
}

export default App
