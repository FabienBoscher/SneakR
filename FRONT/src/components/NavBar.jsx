import React, {useState} from "react";
import {Link} from "react-router-dom"
import ABIBAS from "../assets/logo_abibas.png"
import { AlignJustify } from 'lucide-react';
import { UserRound } from 'lucide-react';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className=" border-b-zinc-800/50 border-solid border-b-2 font-mono" >
            <div id="nav_container" className="flex justify-between items-center bg-red-400">  
                
                <Link to="/">
                    <img src={ABIBAS} className="w-16 h-auto m-4 mx-10"/>
                </Link>


                <div className={`${menuOpen ? "open" : ""} flex justify-between items-center text-lg mr-6`}>
                    <div className="underline-offset-8 decoration-2 transition-all font-medium px-4">
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                    <div className="hover:underline underline-offset-8 decoration-2 transition-all font-medium px-4">
                        <Link to="/register">
                            Register
                        </Link>
                    </div>
                    <div className=" underline-offset-8/50 decoration-2 transition-all font-medium px-4">
                        <Link to="/profil">
                            <UserRound className="hover:size-10 " />
                        </Link>
                    </div>
                </div>

                <AlignJustify className="menu hidden m-4 mx-10 size-10 " onClick={( function() {setMenuOpen(!menuOpen)})} />
           
            </div>  
        </nav>
    )
}

export default Navbar