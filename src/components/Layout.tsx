import React, { ReactNode } from 'react'
import '../styles/Layout.css'

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
	children?: React.ReactNode
}

const Layout: React.FC<Props> = ({
	children,
	title,
	overview,
	imgPath,
	adult,
}: Props) => {
	return (
		<div className={'h-screen w-full'}>
			<img
				id="movieLayout"
				// className={'h-screen w-full absolute left-0 top-0 -z-10'}
				src={require('../images/cropped-1920-1080-1241136.png')}
				alt="test"
			/>
			{children}
		</div>
	)
}

export default Layout
