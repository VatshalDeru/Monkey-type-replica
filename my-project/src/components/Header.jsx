import CrownIcon from "../assets/SVGs/CrownIcon"
import KeyboardIcon from "../assets/SVGs/KeyboardIcon"
import InfoIcon from "../assets/SVGs/InfoIcon"
import SVGIcon from "./SVGIcon"

export default function Header(){
    return(
        <header className="flex gap-4">
            <div className="logo flex gap-2 items-center">
                <img className="w-10 h-auto mt-1" src="./src/assets/monkey-type-logo.png" alt="" />
                <h1 className="text-[#D1D0C1]  h-auto text-center  text-2xl font-[500] leading-[37px]">monkeytype</h1>
            </div>
            <nav className="flex justify-between flex-grow px-2">
                <div className="config-options mt-1 flex">
                    <ul className="flex gap-6 m-auto">
                        <li className="w-5 m-auto">
                            <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#646669"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0 </style> <g> <path className="st0" d="M480.909,109.715H31.091C13.929,109.715,0,123.644,0,140.806v213.098c0,26.728,21.653,48.38,48.38,48.38 H463.62c26.728,0,48.38-21.653,48.38-48.38V140.806C512,123.644,498.071,109.715,480.909,109.715z M329.145,158.475h48.76v48.759 h-48.76V158.475z M329.145,231.615h48.76v48.769h-48.76V231.615z M255.995,158.475h48.77v48.759h-48.77V158.475z M255.995,231.615 h48.77v48.769h-48.77V231.615z M182.855,158.475h48.76v48.759h-48.76V158.475z M182.855,231.615h48.76v48.769h-48.76V231.615z M109.715,158.475h48.76v48.759h-48.76V158.475z M109.715,231.615h48.76v48.769h-48.76V231.615z M85.335,353.525h-48.76v-48.759 h48.76V353.525z M85.335,280.385h-48.76v-48.769h48.76V280.385z M85.335,207.235h-48.76v-48.759h48.76V207.235z M402.285,353.525 h-292.57v-48.759h292.57V353.525z M475.425,353.525h-48.761v-48.759h48.761V353.525z M475.425,280.385h-73.14V158.475h73.14 V280.385z"></path> </g> </g></svg>
                        </li>
                        <li className="w-6 m-auto">
                            <svg  viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#646669" fill='#646669' strokeWidth="0.48"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>crown</title> <path d="M12 10.938c-1.375 0-2.5-1.125-2.5-2.5 0-1.406 1.125-2.5 2.5-2.5s2.5 1.094 2.5 2.5c0 1.375-1.125 2.5-2.5 2.5zM2.031 9.906c1.094 0 1.969 0.906 1.969 2 0 1.125-0.875 2-1.969 2-1.125 0-2.031-0.875-2.031-2 0-1.094 0.906-2 2.031-2zM22.031 9.906c1.094 0 1.969 0.906 1.969 2 0 1.125-0.875 2-1.969 2-1.125 0-2.031-0.875-2.031-2 0-1.094 0.906-2 2.031-2zM4.219 23.719l-1.656-9.063c0.5-0.094 0.969-0.375 1.344-0.688 1.031 0.938 2.344 1.844 3.594 1.844 1.5 0 2.719-2.313 3.563-4.25 0.281 0.094 0.625 0.188 0.938 0.188s0.656-0.094 0.938-0.188c0.844 1.938 2.063 4.25 3.563 4.25 1.25 0 2.563-0.906 3.594-1.844 0.375 0.313 0.844 0.594 1.344 0.688l-1.656 9.063h-15.563zM3.875 24.5h16.25v1.531h-16.25v-1.531z"></path> </g></svg>
                        </li>
                        <li className="w-4 m-auto">
                            <svg fill="#646669" viewBox="-160 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></g></svg>
                        </li>
                        <li className="w-5 m-auto">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#646669" fill-rule="evenodd" d="M9.024 2.783A1 1 0 0 1 10 2h4a1 1 0 0 1 .976.783l.44 1.981c.4.19.781.41 1.14.66l1.938-.61a1 1 0 0 1 1.166.454l2 3.464a1 1 0 0 1-.19 1.237l-1.497 1.373a8.1 8.1 0 0 1 0 1.316l1.497 1.373a1 1 0 0 1 .19 1.237l-2 3.464a1 1 0 0 1-1.166.454l-1.937-.61c-.36.25-.741.47-1.14.66l-.44 1.98A1 1 0 0 1 14 22h-4a1 1 0 0 1-.976-.783l-.44-1.981c-.4-.19-.781-.41-1.14-.66l-1.938.61a1 1 0 0 1-1.166-.454l-2-3.464a1 1 0 0 1 .19-1.237l1.497-1.373a8.097 8.097 0 0 1 0-1.316L2.53 9.97a1 1 0 0 1-.19-1.237l2-3.464a1 1 0 0 1 1.166-.454l1.937.61c.36-.25.741-.47 1.14-.66l.44-1.98zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd"></path></g></svg>
                        </li>
                    </ul>                        
                </div>
                <div className="user-options mt-1 flex">
                    <ul className="flex gap-6 m-auto">
                        <li className="w-5 m-auto">
                            <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-35.84 -35.84 583.68 583.68" xml:space="preserve" fill="#646669" stroke="#646669" stroke-width="25.088"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M193.499,459.298c5.237,30.54,31.518,52.702,62.49,52.702c30.98,0,57.269-22.162,62.506-52.702l0.32-1.86 H193.179L193.499,459.298z"></path> <path class="st0" d="M469.782,371.98c-5.126-5.128-10.349-9.464-15.402-13.661c-21.252-17.648-39.608-32.888-39.608-96.168v-50.194 c0-73.808-51.858-138.572-123.61-154.81c2.876-5.64,4.334-11.568,4.334-17.655C295.496,17.718,277.777,0,255.995,0 c-21.776,0-39.492,17.718-39.492,39.492c0,6.091,1.456,12.018,4.334,17.655c-71.755,16.238-123.61,81.002-123.61,154.81v50.194 c0,63.28-18.356,78.521-39.608,96.168c-5.052,4.196-10.276,8.533-15.402,13.661l-0.466,0.466v49.798h428.496v-49.798 L469.782,371.98z"></path> </g> </g></svg>
                        </li>
                        <li className="w-5 m-auto">
                            <svg fill="#646669" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM4,23H20a1,1,0,0,0,1-1V18a5.006,5.006,0,0,0-5-5H8a5.006,5.006,0,0,0-5,5v4A1,1,0,0,0,4,23Zm1-5a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v3H5Z"></path></g></svg>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}