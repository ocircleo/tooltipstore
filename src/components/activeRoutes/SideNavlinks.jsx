import React from 'react';
import { NavLink } from 'react-router-dom';
import css from "./sideNav.module.css"
const SideNavlinks = ({ link, click }) => {
    let onclickFunc = () => {
        if (click == false) return;
        click()
    }
    return (
        <NavLink onClick={onclickFunc} to={link.link} className={({ isActive, isPending }) => isActive ? css.active : isPending ? css.pending : css.default}>{link.title}</NavLink>
    );
};

export default SideNavlinks;