const gists = [
    {
        title: 'Update State From Previous State',
        author: 'xmagee',
        profile: 'https://github.com/xmagee',
        content: 
`this.setState(prevState => {
    return {
        ...prevState,
        value : prevState.value + 10
    }
})`
    },
    {
        title: 'Reusable Table Component',
        author: 'xmagee',
        profile: 'https://github.com/xmagee',
        content: 
`export default function App() {
	const data1 = [
		{
			"name": "Jane Doe",
			"email": "jdoe@xmagee.com",
			"phone": "(123) 456-7890"
		},
		{
			"name": "John Smith",
			"email": "jsmith@xmagee.com",
			"phone": "(234) 567-8901"
		},
		{
			"name": "Jim Example",
			"email": "jexample@xmagee.com",
			"phone": "(345) 678-9012"
		}
	]

	return (
		<GenericTable tdata={ data1 } />
	)
}

function GenericTable(props) {
	const { tdata } = props

	return (
		<table>
			<thead>
				{ tdata.length > 0 && (
					Object.keys(tdata[0]).map((key, keyIndex) => (
						<th key={keyIndex}>{key}</th>
					))
				)}
			</thead>
			<tbody>
				{ tdata.length > 0 && ( 
					tdata.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{Object.keys(tdata[0]).map((key, keyIndex) => (
								<td key={\`\${rowIndex}_\${keyIndex}\`}>{row.[key]}</td>
							))}
						</tr>
					))
				)}
			</tbody>
		</table>
	)
}`
    }
]

export default gists