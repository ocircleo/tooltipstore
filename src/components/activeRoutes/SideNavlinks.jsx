import React from 'react';
import { NavLink } from 'react-router-dom';
import css from "./sideNav.module.css"
const SideNavlinks = ({ link, click }) => {
    return (
        <NavLink onClick={click} to={link.link} className={({ isActive, isPending }) => isActive ? css.active : isPending ? css.pending : css.default}>{link.title}</NavLink>
    );
};

export default SideNavlinks;