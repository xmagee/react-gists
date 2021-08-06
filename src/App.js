import { TopNav, ReactGist } from './components'
import gists from './gists'

export default function App() {
	return (
		<div className='app_body'>
			<TopNav />

			<main className='container'>
				<p>
					A collection of ReactJS Gists. 
				</p>

				{
					gists.map((gist, index) => (
						<ReactGist key={index} 
							gist={gist} index={index} 
							last={(index + 1) === gists.length} />
					))
				}
			</main>
		</div>
	)
}