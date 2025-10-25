import { useContext} from "react";
import { SVGIconContext } from "../store/svg-icon-context";

const typingModeIntervals = [
    [15, 30, 60, 120],
    [10, 25, 50, 100]
]


export default function SVGIcon({ iconName, children, onClick, selectedIcon }){
    const { handleSelectContent } = useContext(SVGIconContext)
    const iconCSS = selectedIcon === true ? 'flex gap-2 cursor-pointer   hover:fill-[#D0CFC0]  hover:text-[#D0CFC0] fill-[#E2B714] text-[#E2B714]' : 'flex gap-2 cursor-pointer   hover:fill-[#D0CFC0]  hover:text-[#D0CFC0] fill-[#646669] text-[#646669]'

    if(iconName)

    return(
    <li  className={iconCSS} onClick={() => onClick(iconName)}>
        {children}
    </li> 
    )
}