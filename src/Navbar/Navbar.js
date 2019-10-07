import React
    from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const navbar = () => {
    return (
        <nav className={classes.NavbarFixedTop}>
            <div className={classes.NavbarContainerFluid}>
                <div className={classes.NavbarHeader}>
                        <div className={classes.NavbarContainerFluid}>
                            <Link to="/"><img
                                alt="Logo"
                                className={[classes.LogoImg, classes.ImgResponsive].join(' ')}
                                src="/images/logo/logo-60x60.png" /></Link>
                        </div>
                </div>
            </div>
        </nav>
    );
};

export default navbar;