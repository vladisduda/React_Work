import React from 'react'

function App() {
	function getDigitsSum(a, b, c, d, e) {
		return a + b + c + d + e
	}
	const sum = getDigitsSum(1, 2, 3, 4, 5)
	return <p>Сумма цифр числа 12345 = {sum}</p>
}

export default App
