import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useState } from 'react'
import { GoClippy } from 'react-icons/go'

export default function ReactGist(props) {
	const [ show_copied_message, setCopiedMessage ] = useState(false), 
		{ index, gist, last } = props

	return (
		<>
			<h4 id={`${ gist.title.toLowerCase().split(' ').join('-') }`}>
				<a href={`#${ gist.title.toLowerCase().split(' ').join('-') }`}>
					{`${gist.title} `}#
				</a>
			</h4>

			<GoClippy
				size={45}
				className='copy-clipboard-button float-right clipboard-btn'
				data-clipboard-target={`gist_content_${index}`}
				onClick={() => { 
					setCopiedMessage(true)
					setTimeout(() => {
						setCopiedMessage(false)
						document.getElementById(`gist_content_${index}`).blur()
					}, 600) 
				}} />

			<SyntaxHighlighter language='javascript' style={solarizedDark}
				id={`gist_content_${index}`}>
				{ gist.content }
			</SyntaxHighlighter>

			<a href={gist.profile}>Author: {gist.author}</a>

			{show_copied_message && (
				<span className='float-right'>Copied to clipboard!</span>
			)}

			{!last && (
				<hr className='hr-custom' />
			)}
		</>
	)
}