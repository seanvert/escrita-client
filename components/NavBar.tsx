import React from "react";
import Link from "next/link";

const Navbar: React.FC = (props) => {
    return (
		<div class="flex rounded-full bg-slate-300 min-h-50 px-4 space-x-4">
			<div class="rounded-full bg-slate-100">
				<Link href="/">Home</Link>
			</div>
			<div class="">
				<Link href="/escrita">Escrita</Link>
			</div>
			<div class="grow">
				
			</div>
			<div class="">
				<Link href="/login">Login</Link>
			</div>
		</div>
    );
}

export default Navbar;
