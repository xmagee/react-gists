import ReactGist from './ReactGist'  //DiGithub

export default function App() {
	const gists = require('./gists.json')

	return (
		<div className='app_body'>
			<nav className='navigation'>
				<section className='container'>
					<span className='navigation-title'>
						<h1 className='title'>React Gists</h1>
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