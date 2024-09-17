import { Children } from "react";

export default function SVGIcon({children, color, width}){
     return(
        <li className={`w-${width} m-auto`}>
            <a href="" >{children} </a>
        </li> 
     )
}