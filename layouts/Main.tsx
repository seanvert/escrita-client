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
		<div>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <Header />
            {children}
            <Footer />
		</div>
    );
}

export default Main;
