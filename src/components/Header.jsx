import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faHouse} from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <h2>NPTEL</h2>
            </div>
            <ul className={classes.nav_list}>
                <li className={classes.nav_item} title="Home">
                {/* <FontAwesomeIcon icon={faHouse} /> */}
                <i class="fa-solid fa-house"></i>
                </li>
                <li className={classes.nav_item} title="About">
                <i class="fa-solid fa-circle-info"></i>
                </li>
                <li className={classes.nav_item} title="Courses">
                <i class="fa-solid fa-book"></i>
                </li>
                <li className={classes.nav_item} title="Certificates">
                <i class="fa-solid fa-certificate"></i>
                </li>
            </ul>
        </div>
    )
}

export default Header