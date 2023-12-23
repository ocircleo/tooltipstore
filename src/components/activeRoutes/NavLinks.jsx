import React from 'react';
import { NavLink } from 'react-router-dom';
import css from "./navlink.module.css"
const NavLinks = ({ link }) => {
    return (
        <NavLink to={link.link} className={({ isActive, isPending }) => isActive ? css.active : isPending ? css.pending : css.default}>{link.title}</NavLink>
    );
};

export default NavLinks;