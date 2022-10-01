import React from "react";
import Link from "next/link";

const Navbar: React.FC = (props) => {
    return (
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/escrita">Escrita</Link></li>
            <li><Link href="/">Home</Link></li>
          </ul>
        </nav>
    );
}

export default Navbar;