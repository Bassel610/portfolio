import { Link } from "react-router-dom"
import Logo from ".././Images/Logo.png" ;
import { FaBars } from "react-icons/fa";
import { useState } from "react";
function Nav () {
    let [toggleNav, settoggleNav] = useState(false);

    let toggleNavFun= () => {
        toggleNav ? settoggleNav(false) : settoggleNav(true);
        console.log("cliced")
    }
    return (
        <>
        <div className="Nav">
            <Link to={"/"}><img className="Logo" src={Logo} alt="logo" /></Link>
            <div className="RaghteList">
                <ul className="UlNav"> 
                    <Link to={"/"}><li className="LiNav ActiveNav">Home</li></Link>
                    <Link to={"/AoutMe"}><li className="LiNav">About Me</li></Link>
                    <Link to={"/MyWork"}><li className="LiNav">My CV</li></Link>
                    <Link to={"/MyCv"}><li className="LiNav">My Work</li></Link>
                    <Link to={"/ContctMe"}><li className="LiNav">Contact Me</li></Link>
                </ul>
                <FaBars 
                className={toggleNav ? "BarsIcon Routet" : "BarsIcon "}
                onClick={toggleNavFun}
                />
                <div className="MobileNav" >
                <ul className={toggleNav? "MobUlNav Transform" : "MobUlNav " }> 
                    <Link to={"/"}><li className="MobLiNav ActiveNav">Home</li></Link>
                    <Link to={"/AoutMe"}><li className="MobLiNav">About Me</li></Link>
                    <Link to={"/MyWork"}><li className="MobLiNav">My CV</li></Link>
                    <Link to={"/MyCv"}><li className="MobLiNav">My Work</li></Link>
                    <Link to={"/ContctMe"}><li className="MobLiNav">Contact Me</li></Link>
                </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Nav