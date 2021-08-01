import ReactGist from './ReactGist'
import { DiGithub } from 'react-icons/di'
import { CgSmileMouthOpen } from 'react-icons/cg'

export default function App() {
	const gists = require('./gists.json')

	return (
		<div className='app_body'>
			<nav className='navigation'>
				<section className='container'>
					<span className='navigation-title'>
						<h1 className='title'>React Gists</h1>
						<a href='https://github.com/xmagee/react-gists' 
							target='_blank' className='float-right github-link'>
							<DiGithub size={50} />
						</a>
						<a href='https://alexmagee.com'
							target='_blank' className='float-right my-link'>
							<CgSmileMouthOpen size={43} />
						</a>
					</span>
				</section>
			</nav>

			<main className='container'>
				<p>
					A collection of ReactJS Gists. 
				</p>

				{gists.map((gist, index) => (
					<ReactGist key={ index } gistId={ gist } 
						isLast={ (index + 1 === gists.length) } />
				))}
			</main>
		</div>
	)
}