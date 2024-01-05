import './Nav.css';
import {NavLink} from "react-router-dom";


function Nav() {
    return (
        <>

            <nav>

                <ul>

                    <div className="mainlogo">
                        <img src="src/assets/logo-consumergram.png" alt="logo-consumergram"/>

                        <li><NavLink to="/"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>ConsumerGram</NavLink>
                        </li>
                    </div>

                    <div className="search">
                        <form action="">
                            <input className="searchbar" type="search" placeholder="Search ConsumerGram"/>
                        </form>
                    </div>


                    <div className="navlogin">
                        <li><NavLink to="/Login"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Login</NavLink>
                        </li>
                    </div>


                    <div className="navprofile">
                        <li><NavLink to="/Profile"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Profile</NavLink>
                        </li>
                    </div>

                </ul>

            </nav>

        </>
    );
}

export default Nav;