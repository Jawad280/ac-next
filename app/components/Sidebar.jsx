'use client';

import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {

    const [clicked, setClicked] = useState(false);

    if (clicked) {
        return ( 
            <div className="sidebar">
                <img 
                    src={clicked ? "/close.svg" : "/list.svg"} 
                    className="menu" 
                    onClick={() => clicked ? setClicked(false) : setClicked(true)}
                />
                <Link href="/" onClick={() => setClicked(false)}>Home</Link>
                <Link href="/assassins" onClick={() => setClicked(false)}>Assassins</Link>
                <Link href="/about" onClick={() => setClicked(false)}>About</Link>
            </div>
         );
    }

    return ( 
        <div className="sidebar-closed">
            <img 
                src={clicked ? "/close.svg" : "/list.svg"} 
                className="menu" 
                onClick={() => clicked ? setClicked(false) : setClicked(true)}
            />
        </div>
     );
}
 
export default Sidebar;