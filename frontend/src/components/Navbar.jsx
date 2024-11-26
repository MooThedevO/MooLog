import { useState } from "react"
import { Link } from "react-router-dom";
import Image from "./Image";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items=center justify-between">
        {/*logo*/}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
            <Image src="logo.png" alt="MooLog Logo" w={32} h={32} />
            <span>MooLog</span>
        </Link>
        {/*mobile menu*/}
        <div className="md:hidden">
            {/*mobile button*/}
            <div className="cursor-pointer text-4xl"
            onClick={() => setOpen((prev) => !prev)}>
                {open ? "X" : "="}
            </div>
            {/*mobile list*/}
            <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <Link to="/">
                <button className="py-2 px-4 rounded-3xl bg-red-700 text-bisque">Login</button>
            </Link>
            </div>
        </div>
        {/*desktop menu*/}
        <div className="hidden md:flex items-center gap-8 xl:gap-12">
        <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <SignedOut>
                <Link to="/login">
                    <button className="py-2 px-4 rounded-3xl bg-red-700 text-bisque">Login</button>
                </Link>      
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar