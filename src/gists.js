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
    }, 
	{
		title: 'Theme Switcher / Component Themes',
        author: 'xmagee',
        profile: 'https://github.com/xmagee',
        content: 
`import { useState } from 'react'
import { MdBrightness3, MdBrightness7 } from 'react-icons/md'

function MyApp() {
    const [ darkMode, toggleDarkMode ] = useState(true)

    return (
        <>
            <button className={\`btn \${darkMode ? 'btn_dark' : 'btn_light'}\`}
                onClick={() => { toggleDarkMode(!darkMode) }}>
                {darkMode ?
                    (<MdBrightness7 size={25} color='white' />)
                    :
                    (<MdBrightness3 size={25} color='black' />)
                }
            </button>
        </>
    )
}`
	}, 
	{
		title: 'Make Custom Element as Component',
        author: 'xmagee',
        profile: 'https://github.com/xmagee',
        content: 
`function MyButton(props) {
    return (
        <button {...props}>
            {props.title}
        </button>
    )
}

//use it in an app/another component:
function UseMyButton() {
    return (
        <>
            <MyButton title='click me!' />
        </>
    )
}`
	}, 
	{
		title: ' Loop Render Elements From Array',
        author: 'xmagee',
        profile: 'https://github.com/xmagee',
        content: 
`<ul>
{[1,2,3].map((i, index) => {
	<li key={index}>
		{i}
	</li>
})}
</ul>`
	}
]

export default gists