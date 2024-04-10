import React, { useState } from 'react'

function App() {
	const [isChecked, setIsChecked] = useState(false)
	const [message, setMessage] = useState('')
	const [htmlChecked, setHtmlChecked] = useState(false)
	const [cssChecked, setCssChecked] = useState(false)
	const [jsChecked, setJsChecked] = useState(false)

	const handleButtonClick = () => {
		if (isChecked) {
			setMessage('Приветствую вас!')
		} else {
			setMessage('До свидания!')
		}
	}

	return (
		<div>
			<h3>№1</h3>
			<input
				type='checkbox'
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
			/>
			<button onClick={handleButtonClick}>Нажми меня</button>
			<p>{message}</p>
			<h3>№2</h3>
			<label>
				<input
					type='checkbox'
					checked={htmlChecked}
					onChange={() => setHtmlChecked(!htmlChecked)}
				/>
				HTML
			</label>
			<br />
			<label>
				<input
					type='checkbox'
					checked={cssChecked}
					onChange={() => setCssChecked(!cssChecked)}
				/>
				CSS
			</label>
			<br />
			<label>
				<input
					type='checkbox'
					checked={jsChecked}
					onChange={() => setJsChecked(!jsChecked)}
				/>
				JavaScript
			</label>
			<p>{htmlChecked && 'Вы знаете HTML.'}</p>
			<p>{cssChecked && 'Вы знаете CSS.'}</p>
			<p>{jsChecked && 'Вы знаете JavaScript.'}</p>
		</div>
	)
}

export default App
