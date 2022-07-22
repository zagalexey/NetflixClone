import React, {ReactNode} from 'react';

interface LayoutProps {
    title: string,
    overview: string,
    imgPath: string,
    adult: boolean,
    children: any
}

const Layout = ({children, title, overview, imgPath, adult}: LayoutProps) => {
    return (
        <div className={'bg-blue-400 main'}>
            {/*<img src={`https://image.tmdb.org/t/p/w300${imgPath}`}*/}
            {/*     alt=""/>*/}
            <p>{title}</p>
            {children}
        </div>
    );
};

export default Layout;