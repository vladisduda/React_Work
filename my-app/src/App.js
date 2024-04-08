import React from 'react'

function App() {
	const one = (
		<div>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
				<li>7</li>
				<li>8</li>
				<li>9</li>
				<li>10</li>
			</ul>
		</div>
	)

	const two = (
		<div>
			<table>
				<tbody>
					<tr>
						<td>11</td>
						<td>12</td>
						<td>13</td>
					</tr>
					<tr>
						<td>21</td>
						<td>22</td>
						<td>23</td>
					</tr>
					<tr>
						<td>31</td>
						<td>32</td>
						<td>33</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
	return (
		<div>
			{one},{two}
		</div>
	)
}
export default App
