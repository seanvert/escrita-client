import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import footer from '../components/Footer';
import Footer from '../components/Footer';


const Main: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
    ...mainProps
}) => {
    return (
		<>
            <Head>
                <title>
                    {title}
                </title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
			<Header />
			<div className="grow flex">
				{children}
			</div>
			<Footer />
		</>
    );
}

export default Main;
