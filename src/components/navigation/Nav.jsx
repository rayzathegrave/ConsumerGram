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
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}><h1>ConsumerGram</h1></NavLink>
                        </li>
                    </div>

                    <div className="search">
                        <form action="">
                            <input className="searchbar" type="search" placeholder="Search ConsumerGram"/>
                        </form>
                    </div>


                    <div className="navlogin">
                        <li><NavLink to="/Login"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}><h1>Login</h1></NavLink>
                        </li>
                    </div>


                    <div className="navprofile">
                        <li><NavLink to="/Profile"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}><h1>Profile</h1></NavLink>
                        </li>
                    </div>

                    <div className="makepost">
                        <li>
                            <NavLink to="/MakePost"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}><h1>Make
                                Post</h1></NavLink>
                        </li>

                    </div>

                </ul>

            </nav>

        </>
    );
}

export default Nav;