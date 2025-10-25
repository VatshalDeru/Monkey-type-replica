import React from "react"
import { useState } from "react"
import SVGIcon from "./SVGIcon"
import { SVGIcons } from "../assets/SVGs/ypingModeIcons"

export default function Header({ handleSelectContent }){

    return(
        <header className="flex gap-4">
            <div className="logo flex gap-2 items-center">
                <img className="w-10 h-auto mt-1" src="./src/assets/monkey-type-logo.png" alt="" />
                <h1 className="text-[#D1D0C1]  h-auto text-center  text-2xl font-[500] leading-[37px]">monkeytype</h1>
            </div>
            <nav className="flex justify-between flex-grow px-2">
                <div className="config-options mt-1 flex">
                    <ul className="flex gap-6 m-auto">
                        {SVGIcons.menuIcons.map((item, index) =>{
                            return(
                                <SVGIcon key={index} onClick={handleSelectContent} iconName={item.iconName}>
                                    {item.svg}
                                </SVGIcon>
                            )
                        })}
                    </ul>                        
                </div>
                <div className="user-options mt-1 flex">
                    <ul className="flex gap-6 m-auto">
                        {SVGIcons.userIcons.map((item, index) =>{
                            return(
                                <SVGIcon key={index} onClick={handleSelectContent} iconName={item.iconName}>
                                    {item.svg}
                                </SVGIcon>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}