import React from "react"
import CHAUSSURE1 from "../assets/Chaussure1.webp"
import CHAUSSURE2 from "../assets/Chaussure2.webp"
import CHAUSSURE3 from "../assets/Chaussure3.webp"
import CHAUSSURE4 from "../assets/Chaussure4.webp"
import CHAUSSURE5 from "../assets/Chaussure5.webp"
import CHAUSSURE6 from "../assets/Chaussure6.webp"
import CHAUSSURE7 from "../assets/Chaussure7.webp"
import CHAUSSURE8 from "../assets/Chaussure8.webp"
import CHAUSSURE9 from "../assets/Chaussure9.webp"



function Home() {
    return (
        <div className="home_container flex flex-col items-center p-3 font-mono">

            <div className=" text-4xl font-medium m-4">
                <h1>Sneakers</h1>
            </div>

            <div className="flex flex-wrap gap-6 justify-center p-3 mb-6">
               
                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE1}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>

                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE2}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>

                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE3}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>

                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE4}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>
                
                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE5}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>

                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE6}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>

                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE7}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>

                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE8}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>

                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE9}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>

                <div className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
                    <div className=" border-solid border-2 ">
                        <img className="size-52"  src={CHAUSSURE1}></img>
                    </div>
                    <p className="mx-5 mt-[15px]">Abibas</p>
                    <p className="mx-5">Campus 3000</p>
                    <p className="mx-5">350€</p>
                </div>

            </div>

        </div>
    )
}

export default Home