import React, { useState } from 'react'

function App() {
	const [value, setValue] = useState('чикибамбони')
	const [checked, setChecked] = useState(true)
	return (
		<div>
			<p>текст по умолчанию:</p>
			<input defaultValue={value} />
			<p>по умолчанию "галочка" нажата:</p>
			<input type='checkbox' defaultChecked={checked} />
		</div>
	)
}

export default App
