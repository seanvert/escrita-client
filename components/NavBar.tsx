import React from "react";
import Link from "next/link";
import { Flex, Spacer } from '@chakra-ui/react'

const Navbar: React.FC = (props) => {
    return (
        <Flex as="aside">
			<Link href="/">Home</Link>
			<Link href="/escrita">Escrita</Link>
			<Spacer />
            <Link href="/">Perfil</Link>
        </Flex>
    );
}

export default Navbar;
