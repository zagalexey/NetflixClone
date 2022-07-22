import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Layout from './components/Layout'

type movieType = {
	adult: boolean
	backdrop_path: string
	genre_ids: []
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	video: boolean
	vote_average: number
	vote_count: number
	id: number
	title: string
	release_date: string
}

function App() {
	const API_KEY = 'e1a2c26e413c33d2bedda22168b9ca27'
	const hrefAllMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

	const [movies, setMovies] = useState<movieType[]>([])
	const [movieLayout, setMovieLayout] = useState<movieType>()
	// const [allSetUp, setAllSetUp] = useState(false)

	fetch(hrefAllMovies)
		.then(response => {
			return response.json()
		})
		.then(data => {
			setMovies(data.results)
			setMovieLayout(data.results[0])
			// setAllSetUp(true)
		})

	const onScroll = (): void => {
		let elem = document.getElementsByTagName('nav')
		let parentElem = document.querySelector('.main')

		let positionObj =
			parentElem !== null ? parentElem.getBoundingClientRect() : null
		if (positionObj !== null && positionObj.top !== 0) {
			elem[0].classList.remove('navbarOnScrollOff')
			elem[0].classList.add('navbarOnScrollOn')
		} else {
			elem[0].classList.remove('navbarOnScrollOn')
			elem[0].classList.add('navbarOnScrollOff')
		}
	}

	window.onscroll = function () {
		onScroll()
	}

	return (
		<>
			<Layout
				title={movieLayout ? movieLayout.title : null}
				overview={movieLayout ? movieLayout?.overview : null}
				imgPath={movieLayout ? movieLayout?.backdrop_path : null}
				adult={movieLayout ? movieLayout?.adult : null}
			>
				<Navbar />
				{/* <ul>
					{movies.map(item => (
						<>
							<li key={item.id}>{item.title}</li>
							<img
								style={{ height: '100px', width: '200px' }}
								key={Date.now()}
								src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
							/>
						</>
					))}
				</ul> */}
			</Layout>
		</>
	)
}

export default App
