import { Children } from "react";

export default function SVGIcon({ iconName, children, onClick, selectedIcon }){
    const iconCSS = selectedIcon === true ? 'flex gap-2 cursor-pointer   hover:fill-[#D0CFC0]  hover:text-[#D0CFC0] fill-[#E2B714] text-[#E2B714]' : 'flex gap-2 cursor-pointer   hover:fill-[#D0CFC0]  hover:text-[#D0CFC0] fill-[#646669] text-[#646669]'

    return(
    <li  className={iconCSS} onClick={() => onClick(iconName)}>
        {children}
    </li> 
    )
}