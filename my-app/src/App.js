import React, { useState } from 'react'

function App() {
	const [value1, setValue1] = useState('')
	const [value2, setValue2] = useState('')

	const handleChange1 = event => {
		setValue1(event.target.value)
	}

	const handleChange2 = event => {
		setValue2(event.target.value)
	}

	const translit = text => {
		const translitMap = {
			а: 'a',
			б: 'b',
			в: 'v',
			г: 'g',
			д: 'd',
			е: 'e',
			ё: 'yo',
			ж: 'zh',
			з: 'z',
			и: 'i',
			й: 'y',
			к: 'k',
			л: 'l',
			м: 'm',
			н: 'n',
			о: 'o',
			п: 'p',
			р: 'r',
			с: 's',
			т: 't',
			у: 'u',
			ф: 'f',
			х: 'kh',
			ц: 'ts',
			ч: 'ch',
			ш: 'sh',
			щ: 'shch',
			ы: 'y',
			э: 'e',
			ю: 'yu',
			я: 'ya',
		}

		return text
			.toLowerCase()
			.split('')
			.map(char => translitMap[char] || char)
			.join('')
	}

	const calculateSum = () => {
		const numbers = value2.split('\n').map(Number)
		const sum = numbers.reduce((acc, curr) => acc + curr, 0)
		return sum
	}

	return (
		<div>
			<h3>№1</h3>
			<textarea value={value1} onChange={handleChange1} />
			<p>{translit(value1)}</p>

			<h3>№2</h3>
			<textarea value={value2} onChange={handleChange2} />
			<p>Сумма чисел: {calculateSum()}</p>
		</div>
	)
}

export default App
