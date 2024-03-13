import './Nav.css';
import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import searchbar from "../searchbar/Searchbar.jsx";
import Searchbar from "../searchbar/Searchbar.jsx";


function Nav() {

    const {isAuth, user, logout} = useContext(AuthContext);
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



                    <Searchbar/>


                    {/*-----------------------------SWITCH TUSSEN LOGOUT EN LOGIN--------------------------*/}
                    {/*Ingelogd? Deze code laat logout zien*/}
                    {isAuth && (
                        <li><Link
                            onClick={(e) => {
                                e.preventDefault();
                                logout();
                            }} to="/">Logout
                        </Link></li>
                    )}
                    {/*Uitgelogd? Deze code laat login zien*/}
                    {!isAuth && (
                        <div className="navlogin">
                            <li>
                                <NavLink to="/login"
                                         className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                                    <h1>Login</h1></NavLink>
                            </li>
                        </div>
                    )}
                    {/*-------------------------------------------------------*/}


                    <div className="navlogin">
                        <button className="dropbtn"><h1>Account</h1></button>
                        <div className="dropdown-content2">
                            <li><Link to="/profile"> Profile</Link></li>
                            <li><Link to="/MyPost"> My post</Link></li>
                            {user && user.role === 'ROLE_ADMIN' && (
                                <li>
                                    <NavLink
                                        to="/AdminPage"
                                        className={({isActive}) =>
                                            isActive === true ? 'active-link' : 'default-link'}
                                    >
                                        Admin
                                    </NavLink>
                                </li>
                            )}

                        </div>
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