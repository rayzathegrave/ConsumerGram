import './Nav.css';
import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";


function Nav() {

    const {isAuthenticated, logout} = useContext(AuthContext);
    return (
        <>

            <nav>

                <ul>

                    <div className="mainlogo">
                        <img src="src/assets/logo-consumergram.png" alt="logo-consumergram"/>

                        <li><NavLink to="/"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                            <h1>ConsumerGram</h1></NavLink>
                        </li>
                    </div>

                    <div className="search">
                        <form action="">
                            <input className="searchbar" type="search" placeholder="Search ConsumerGram"/>
                        </form>
                    </div>


                    <div className="navlogin">
                        <button className="dropbtn"><h1>Login</h1></button>
                        <div className="dropdown-content2">
                            <li><Link to="/login"> Login</Link></li>
                            {/*<li><Link to="/"> Logout</Link></li>*/}

                            <li><Link
                                onClick={(e) => {
                                    e.preventDefault(); logout();}} to="/">Logout
                            </Link></li>
                        </div>
                    </div>


                    <div className="navprofile">
                        <li><NavLink to="/Profile"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                            <h1>Profile</h1></NavLink>
                        </li>
                    </div>

                    <div className="makepost">
                        <li>
                            <NavLink to="/MakePost"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                                <h1>Make
                                    Post</h1></NavLink>
                        </li>

                    </div>

                </ul>

            </nav>

        </>
    );
}

export default Nav;