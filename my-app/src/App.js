import React from 'react'

// Задание 1 - как работает код:
// В компоненте App определена функция func принимающая два параметра: arg и event.
// В JSX элементе кнопки используется обработчик события onClick, который вызывает стрелочную функцию.
// Внутри функции вызывается func('eee', event), передавая строку 'eee' первым аргументом и event вторым.
// При нажатии на кнопку будет выведена строка 'eee' в консоль.

function App() {
	function func1(event, arg) {
		console.log(arg, event)
	}

	function func2(arg1, event, arg2) {
		console.log(arg1, event, arg2)
	}

	function func3(arg1, arg2) {
		console.log(arg1, arg2)
	}

	return (
		<div>
			<button onClick={event => func1(event, 'eee')}>1</button>
			<button onClick={event => func2('hello', event, 'eee')}>2</button>
			<button onClick={() => func3('eee', 'hello')}>3</button>
		</div>
	)
}

export default App
