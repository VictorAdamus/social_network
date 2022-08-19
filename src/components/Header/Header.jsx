import React from "react";
import classes from "./style.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.clouds}>
                <a className={classes.logo__link} href='#'><p className={classes.logo__text}>simpson's<span className={classes.logo__text_small}>network</span></p></a>
            </div>
        </header>
    )
}

export default Header;