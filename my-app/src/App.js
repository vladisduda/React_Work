import React, { useState } from 'react'

function App() {
	const [value, setValue] = useState('')

	return (
		<div>
			<select value={value} onChange={event => setValue(event.target.value)}>
				<option value='1'>от 0 до 12 лет</option>
				<option value='2'>от 13 до 17</option>
				<option value='3'>от 18 до 25</option>
				<option value='4'>старше 25 лет</option>
			</select>
			<p>
				{value === '1' && 'вы выбрали первый пункт'}
				{value === '2' && 'вы выбрали второй пункт'}
				{value === '3' && 'вы выбрали третий пункт'}
				{value === '4' && 'вы скуф'}
			</p>
		</div>
	)
}

export default App
