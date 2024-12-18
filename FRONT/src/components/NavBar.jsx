import React, {useState} from "react";
import {Link} from "react-router-dom"
import ABIBAS from "../assets/logo-adidas.png"
import { AlignJustify } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Heart } from 'lucide-react';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="  w-full " >
            <div id="nav_container" className="flex justify-between items-center h-16 bg-red-400 rounded-2xl  font-mono m-4 ">  
                
                <div className="w-auto h-auto mx-10">
                    <Link to="/">
                        <img src={ABIBAS} className="w-16 h-11  hover:w-[70px] hover:h-12 transition-all duration-500" />
                    </Link>
                </div>

                <div className={`${isMenuOpen ? "open" : ""} flex justify-between items-center  text-lg mr-6`}>
                    <div className="w-[60px] underline-offset-8 decoration-2 font-medium mx-1  transition-all hover:text-xl duration-500  ">
                        <Link to="/login" className="text-white">
                            Login
                        </Link>
                    </div>
                    <div className="w-[89px] underline-offset-8 decoration-2 font-medium mx-1  transition-all hover:text-xl duration-500 ">
                        <Link to="/register" className="text-white">
                            Register
                        </Link>
                    </div>
                    <div className="flex justify-center items-center  underline-offset-8/50 decoration-2 font-medium size-10 m-1  transition-all duration-200  ">
                        <Link to="/favoris" className="text-white">
                            <Heart className="hover:size-10 duration-500 " />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center  underline-offset-8/50 decoration-2 font-medium size-10 m-1  transition-all duration-200  ">
                        <Link to="/profil" className="text-white">
                            <UserRound className="hover:size-10 duration-500 " />
                        </Link>
                    </div>
                    
                </div>

                <AlignJustify className="menu hidden m-4 mx-10 size-10 " onClick={( function() {setMenuOpen(!menuOpen)})} />
           
            </div>  
        </nav>
    )
}

export default Navbar