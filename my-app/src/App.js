import React from 'react'

function App() {
	function getDigitsSum(a, b, c) {
		return a + b + c
	}
	const sum = getDigitsSum(1, 2, 3)
	return <div>сумму цифр числа 123 = {sum}</div>
}

export default App
