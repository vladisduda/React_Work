import React from 'react'
import Employee from './Employee'

function App() {
	return (
		<div>
			<Employee
				last_name='Белова'
				first_name='Арина'
				patronymic='Михайловна'
				salary='5000$'
			/>
			<Employee
				last_name='Львов'
				first_name='Ярослав'
				patronymic='Александрович'
				salary='6000$'
			/>
			<Employee
				last_name='Измайлов'
				first_name='Матвей'
				patronymic='Максимович'
				salary='5500$'
			/>
		</div>
	)
}

export default App
