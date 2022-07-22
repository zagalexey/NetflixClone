import { JsxElement } from 'typescript'

// interface LayoutProps {
// 	title: string
// 	overview: string
// 	imgPath: string
// 	adult: boolean
// 	children: any
// }

type Props = {
	title: string | null
	overview: string | null
	imgPath: string | null
	adult: boolean | null
	children?: JSX.Element | JSX.Element[] | string | string[]
}

const Layout = ({ children, title, overview, imgPath, adult }: Props) => {
	return (
		<div className={'bg-blue-400 h-screen w-full relative main'}>
			{/*<img src={`https://image.tmdb.org/t/p/w300${imgPath}`}*/}
			{/*     alt=""/>*/}

			{/* <p>{title}</p> */}
			{children}
			{title ? <p>{title}</p> : <></>}
			<img
				className={'w-full h-screen'}
				src={`https://image.tmdb.org/t/p/w300${imgPath}`}
				alt="test"
			/>
		</div>
	)
}

export default Layout
