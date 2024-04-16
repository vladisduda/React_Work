import React from 'react'

function Employee({ last_name, first_name, patronymic, salary }) {
	return (
		<p>
			Фамилия: <span>{last_name}</span>,<br /> Имя: <span>{first_name}</span>,
			<br />
			Отчество: <span>{patronymic}</span>,<br /> Зарплата: <span>{salary}</span>
			<br />
		</p>
	)
}

export default Employee
