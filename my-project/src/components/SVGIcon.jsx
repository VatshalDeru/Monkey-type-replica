import { Children } from "react";

export default function SVGIcon({index, handleSelectContent, iconName,children}){
     return(
        <li className=" m-auto cursor-pointer fill-[#646669] hover:fill-[#D0CFC0]" onClick={() => handleSelectContent(iconName)}>
            {children}
        </li> 
     )
}