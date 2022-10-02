import React from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react'
import Header from '../components/Header';

const Main: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
    ...mainProps
}) => {
    return (
        <Flex
        direction="column"
        >
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <Header />
            {children}
        </Flex>
    );
}

export default Main;