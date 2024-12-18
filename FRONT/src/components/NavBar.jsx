import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ABIBAS from "../assets/Logo-abibas.png"
import { UserRound } from "lucide-react"
import { Heart } from "lucide-react"

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    setIsLoggedIn(!!user)
  }, [])

  return (
    <nav className="w-full">
      <div id="nav_container" className="flex justify-between items-center h-16 bg-red-800 sm:rounded-2xl font-mono m-0  sm:m-4">
        <div className="w-[70px] mx-2 sm:mx-10 flex justify-center">
          <Link to="/">
            <img src={ABIBAS} className="w-16 h-11 hover:w-[70px] hover:h-12 transition-all duration-500" />
          </Link>
        </div>

        <div>
          {!isLoggedIn ? (
            <div className="flex justify-between items-center w-[210px] text-lg m-5 sm:mr-10">
              <div className="w-[60px] underline-offset-8 decoration-2 font-medium  flex justify-center transition-all hover:text-xl duration-500">
                <Link to="/login" className="text-white">
                  Connection
                </Link>
              </div>
              <div className="w-[89px] underline-offset-8 decoration-2 font-medium mx-1 flex justify-center transition-all hover:text-xl duration-500">
                <Link to="/register" className="text-white">
                  Inscription
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex mr-6">
              <div className="flex justify-center items-center underline-offset-8/50 decoration-2 font-medium size-10 m-1 transition-all duration-200">
                <Link to="/favoris" className="text-white">
                  <Heart className="hover:size-10 duration-500" />
                </Link>
              </div>
              <div className="flex justify-center items-center underline-offset-8/50 decoration-2 font-medium size-10 m-1 transition-all duration-200">
                <Link to="/profil" className="text-white">
                  <UserRound className="hover:size-10 duration-500" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
