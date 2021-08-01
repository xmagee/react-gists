import { Component } from 'react'
import axios from 'axios'
import { DiReact } from 'react-icons/di'
import { GoClippy } from 'react-icons/go'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default class ReactGist extends Component {
	constructor(props) {
		super(props)
		this.state={
			loading: true, 
			error: false,
			github_gist: {}, 
			error_info: '', 
            show_copied_message: false
		}
	}

	componentDidMount() {
		axios.get(`https://api.github.com/gists/${this.props.gistId}`)
			.then(r => {
				if (r.status === 200) {
					this.setState({
						github_gist: r.data, 
						loading: false
					})
				} else { 
					throw (r.status)
				}
			})
			.catch(e => {
				this.setState({
					error: true, 
					error_info: e, 
					loading: false
				})
			})
	}

    toggleClipboardCopiedMessage() {
        this.setState({
            show_copied_message: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    show_copied_message: false
                })
            }, 1000)
        })
    }

	render() {
        const { loading, error, error_info, github_gist, show_copied_message  } = this.state

		return (
			<div id={ this.props.gist } className='gist-container'>
				{loading ? 
                (
                    <div className='gist-loading-container'>
                        <DiReact className='gist-loading-icon' size={50} />
                    </div>
                ) 
                : 
                (error ? 
                ( <p>{error_info}</p> )
                :
                (
                    <>
                        <h4>
                            <a href={ github_gist.html_url }>{github_gist.description}</a> 
                            {' '}<a href={`#${ this.props.gistid }`}>#</a>
                        </h4>

                        <GoClippy 
                            size={45} 
                            className='copy-clipboard-button float-right clipboard-btn' 
                            data-clipboard-target={`#gist_content_${this.props.gistId}`}
                            onClick={() => { this.toggleClipboardCopiedMessage() }} />

                        <SyntaxHighlighter language='javascript' style={ solarizedDark }
                            id={`gist_content_${this.props.gistId}`}>
                            { github_gist.files.[Object.keys(github_gist.files)].content }
                        </SyntaxHighlighter>

                        <a href={github_gist.owner.html_url}>
                            <img className='user_github_image' alt={github_gist.owner.login}
                                src={`https://avatars.githubusercontent.com/u/86931568?v=4`} />
                        </a>

                        {show_copied_message && (
                            <span className='float-right'>Copied to clipboard!</span>
                        )}

                        {!this.props.isLast && (
                            <hr className='hr-custom' />
                        )} 
                    </>
                ))}
			</div>
		)
	}
}