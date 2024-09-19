import { Children } from "react";

export default function SVGIcon({ iconName, children, onClick }){
    // console.log(props)
     return(
        <li className="flex gap-2 cursor-pointer fill-[#646669] hover:fill-[#D0CFC0] text-[#646669] hover:text-[#D0CFC0]" onClick={() => onClick(iconName)}>
            {children}
        </li> 
     )
}