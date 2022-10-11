import React from "react";
import Link from "next/link";

const Navbar: React.FC = (props) => {
    return (
		<div className="flex rounded-full bg-slate-300 min-h-50 px-4 space-x-4">
			<div className="rounded-full bg-slate-100">
				<Link href="/">Home</Link>
			</div>
			<div className="">
				<Link href="/escrita">Escrita</Link>
			</div>
			<div className="">
				<Link href="/trilha">Trilha</Link>
			</div>
			<div className="grow">
				
			</div>
			<div className="">
				<Link href="/login">Login</Link>
			</div>
		</div>
    );
}

export default Navbar;
