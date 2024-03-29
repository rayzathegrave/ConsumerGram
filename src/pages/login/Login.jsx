import './Login.css';
import {useContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContextProvider.jsx";


function Login() {


    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const enabled = true

    const [error1, toggleError1] = useState(false);
    const [error2, toggleError2] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);


    // registreer functie
    async function handleForm1Submit(e) {
        e.preventDefault();
        toggleError2(false);
        toggleLoading(true);

        try {

            const response = await axios.post('http://localhost:8080/users', {
                username: username,
                password: password,
                email: email,
                enabled: enabled
            });

            console.log(response.data);

        } catch (e) {
            if (axios.isCancel(e)) {
                console.log('Request canceled:', e.message);
            } else {
                console.error(e);
                toggleError2(true);
            }
        } finally {
            toggleLoading(false);
        }
    }

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:8080/users');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    // login functie
    async function handleForm2Submit(e) {
        e.preventDefault();
        toggleError1(false);
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password
            });
            console.log(response.data);
            login(response.data.jwt);
            navigate('/profile'); // redirect to profile page

        } catch (error) {
            console.error(error);
            toggleError1(true);
        }
    }


    return (
        <>


            <div className="pimsouterbox">

                <div className="signupSection">

                    <div className="info">

                        <h2>Welcome to ConsumerGram</h2>
                        <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                        <p>The Future Is Here</p>
                        <ul className="noBullet">
                            <form onSubmit={handleForm2Submit}>

                                <li>
                                    <label htmlFor="username"></label>
                                    <input type="text"
                                           className="inputFields"
                                           id="username"
                                           value={username}
                                           name="username"
                                           placeholder="Username"
                                           required
                                           autoComplete="on"
                                           onChange={(e) => setUserName(e.target.value)}/>

                                </li>
                                <li>
                                    <label htmlFor="password"></label>
                                    <input type="password"
                                           className="inputFields"
                                           id="password"
                                           name="password"
                                           value={password}
                                           placeholder="Password"
                                           required
                                           onChange={(e) => setPassword(e.target.value)}/>

                                </li>
                                {error1 && <p className="error">Combination of username and password is not valid</p>}
                                <li id="center-btn">
                                    <input type="submit" id="join-btn1" name="Login" alt="Login" value="Login"/>
                                </li>
                            </form>
                        </ul>

                    </div>


                    <form onSubmit={handleForm1Submit} className="signupForm">
                        <h2>Sign Up</h2>
                        <ul className="noBullet">
                            <li>
                                {/*<label htmlFor="username">Username</label>*/}
                                <input
                                    className="inputFields"
                                    type="text"
                                    name="username"
                                    required
                                    value={username}
                                    placeholder="Username"
                                    id="username"
                                    maxLength={50}
                                    minLength={1}
                                    onChange={(e) => setUserName(e.target.value)}/>
                            </li>
                            <li>
                                {/*<label htmlFor="password">password</label>*/}
                                <input
                                    className="inputFields"
                                    type="password"
                                    name="password"
                                    required
                                    value={password}
                                    maxLength={50}
                                    pattern=".*[!@#$%^&*].*"
                                    minLength={8}
                                    id="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </li>
                            <li>
                                {/*<label htmlFor="email">email</label>*/}
                                <input
                                    className="inputFields"
                                    type="email"
                                    name="email"
                                    required
                                    value={email}
                                    id="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </li>

                            {error2 && <p className="error">Account already exist. Try another username.</p>}


                            <li id="center-btn">
                                <input type="submit" id="join-btn" name="join" alt="Join" value="Join"
                                       onClick={() => {
                                           if (error1 || error2) {
                                               alert('An error occurred');
                                           } else {
                                               alert('Account created');
                                           }
                                       }}/>
                            </li>
                            <br/>
                            <i className="iGrey">Password must be at least 8 characters <br/> long and contain a special
                                <br/> character ?=.*[!@#$%^&*]</i>

                        </ul>
                    </form>
                </div>
            </div>


        </>
    );
}

export default Login;