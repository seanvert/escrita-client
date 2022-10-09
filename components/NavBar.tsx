import React from "react";
import Link from "next/link";

const Navbar: React.FC = (props) => {
    return (
		<div>
			<Link href="/">Home</Link>
			<Link href="/escrita">Escrita</Link>
            <Link href="/login">Login</Link>
		</div>
    );
}

export default Navbar;
