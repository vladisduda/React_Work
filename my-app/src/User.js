import React from 'react'

function User({ id, name, surname, age, isEdit, toggleMode, editUser }) {
	return (
		<div>
			<span>Имя:</span>{' '}
			{isEdit ? (
				<input onChange={event => editUser(id, 'name', event)} />
			) : (
				<span>{name}</span>
			)}
			<br />
			<span>Фамилия:</span>{' '}
			{isEdit ? (
				<input onChange={event => editUser(id, 'surname', event)} />
			) : (
				<span>{surname}</span>
			)}
			<br />
			<span>Возраст:</span> {age}
			<br />
			<button onClick={() => toggleMode(id)}>
				{isEdit ? 'Сохранить' : 'Редактировать'}
			</button>
			<br />
			<br />
		</div>
	)
}

export default User
