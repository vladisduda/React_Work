import React, { useState } from 'react'

function App() {
	const [number1, setNumber1] = useState()
	const [number2, setNumber2] = useState()
	const [date1, setDate1] = useState()
	const [date2, setDate2] = useState()
	const [sum, setSum] = useState()
	const [product, setProduct] = useState()
	const [dateDifference, setDateDifference] = useState()

	const sumHandler = () => {
		setSum(number1 + number2)
	}

	const productHandler = () => {
		setProduct(number1 * number2)
	}

	const dateDifferenceHandler = () => {
		const oneDay = 24 * 60 * 60 * 1000 // milliseconds in a day
		const diffInDays = Math.round(
			Math.abs((new Date(date1) - new Date(date2)) / oneDay)
		)
		setDateDifference(diffInDays)
	}

	return (
		<div>
			<h3>№1</h3>
			<input
				type='number'
				value={number1}
				onChange={e => setNumber1(+e.target.value)}
			/>
			<input
				type='number'
				value={number2}
				onChange={e => setNumber2(+e.target.value)}
			/>
			<button onClick={sumHandler}>Сумма</button>
			<button onClick={productHandler}>Произведение</button>
			<p>Сумма: {sum}</p>
			<p>Произведение: {product}</p>

			<h3>№2-3</h3>
			{/* Default values are set to current date */}
			<input
				type='date'
				value={date1}
				onChange={e => setDate1(e.target.value)}
			/>
			<input
				type='date'
				value={date2}
				onChange={e => setDate2(e.target.value)}
			/>
			<button onClick={dateDifferenceHandler}>Разница в днях</button>
			<p>Разница в днях: {dateDifference}</p>

			<h3>№4</h3>
			<input
				type='number'
				value={number1}
				onChange={e => setNumber1(+e.target.value)}
				onBlur={() =>
					setSum(
						number1
							.toString()
							.split('')
							.reduce((acc, curr) => acc + +curr, 0)
					)
				}
			/>
			<p>Сумма цифр: {sum}</p>

			<h3>№5</h3>
			<input
				type='number'
				value={number2}
				onChange={e => setNumber2(+e.target.value)}
				onBlur={() => {
					let product = 1
					for (let i = 1; i <= number2; i++) {
						if (number2 % i === 0) {
							product *= i
						}
					}
					setProduct(product)
				}}
			/>
			<p>Произведение делителей: {product}</p>
		</div>
	)
}

export default App
