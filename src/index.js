import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ClipboardJS from 'clipboard'

require('typeface-roboto')
require('milligram')

new ClipboardJS('.clipboard-btn')

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)