import './Nav.css';
import {NavLink} from "react-router-dom";


function Nav() {
    return (
        <>

            <div className="navi">
                <nav>

                    <ul>
                        <img src="src/assets/logo-consumergram.png" alt="logo-consumergram"/>
                        <li><NavLink to="/"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>ConsumerGram</NavLink>
                        </li>

                        <div className="search">
                            <form action="">
                                <input className="searchbar" placeholder="Search ConsumerGram"/>
                            </form>
                        </div>

                        <li><NavLink to="/Login"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Login</NavLink>
                        </li>
                        <li><NavLink to="/Profile"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Profile</NavLink>
                        </li>
                    </ul>


                </nav>
            </div>
        </>
    );
}

export default Nav;