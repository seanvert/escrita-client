import React from "react";
import Link from "next/link";
import { Flex, Box } from '@chakra-ui/react'

const Navbar: React.FC = (props) => {
    return (
        <Box as="aside">
            <Link href="/">Home</Link>
            <Link href="/escrita">Escrita</Link>
            <Link href="/">Perfil</Link>

        </Box>
    );
}

export default Navbar;
