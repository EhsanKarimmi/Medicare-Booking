import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import userImage from "../assets/images/avatar_icon.png";
import { NavbarLinks } from "../utils/NavbarLinks";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [selectedLink, setSelectedLink] = useState();
    useEffect(() => {
        setSelectedLink(window.location.pathname);
    }, []);
    return (
        <nav className="navbar sticky top-0 right-0 bg-white py-3 px-20 flex justify-between items-center shadow-sm">
            {/* logo */}
            <Link to="/">
                <img src={logo} alt="Medicare Logo" />
            </Link>
            {/* links */}
            <div>
                <ul className=" flex justify-start items-center gap-5">
                    {NavbarLinks.map((link) => {
                        return (
                            <NavLink to={link.path} key={link.id}>
                                <li
                                    onClick={() => setSelectedLink(link.path)}
                                    className={`font-semibold transition-all duration-200 ${
                                        selectedLink === link.path
                                            ? ` text-primaryColor `
                                            : ` text-black`
                                    }`}
                                >
                                    {link.title}
                                </li>
                            </NavLink>
                        );
                    })}
                </ul>
            </div>
            {/* user information */}
            <div className="flex justify-start items-center gap-5">
                <figure>
                    <img src={userImage} alt="User Image" className="rounded-full w-8 h-8" />
                </figure>
                <Link to="/login">
                    <button className="font-medium bg-primaryColor px-3 py-1 rounded-md text-white">
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
