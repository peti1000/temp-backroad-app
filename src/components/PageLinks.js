import React from 'react';
import {pageLinks} from "../data";
import PageLink from "./PageLink";

function PageLinks({parentClass, itemClas}) {
    return (
        <ul className={parentClass} id="nav-links">
            {pageLinks.map((link) => {
                return (
                    <PageLink key={link.id} link={link} itemClass={itemClas}/>
                )
            })}
        </ul>
    );
}

export default PageLinks;