import './Login.css';
import {useState} from "react";
import axios from "axios";


function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const enabled = true
    const [error, toggleError] = useState(false);


    async function createUser(e) {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:8080/users', {
                username: username,
                password: password,
                email: email,
                enabled : enabled
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
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



    async function HandleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
            toggleError(true);
        }
    }

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:8080/authenticated');
            console.log(response.data);
        } catch (error) {
            console.error(error);
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
                <form onSubmit={HandleSubmit}>

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
                <li id="center-btn">
                    <input type="submit" id="join-btn1" name="Login" alt="Login" value="Login"/>
                </li>
            </form>
                </ul>

        </div>



        <form onSubmit={(e) => createUser(e)} className="signupForm">
            <h2>Sign Up</h2>
            <ul className="noBullet">
                    <li>
                        {/*<label htmlFor="username">Username</label>*/}
                        <input
                            className="inputFields"
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Username"
                            id="username"
                            onChange={(e) => setUserName(e.target.value)}/>
                    </li>
                    <li>
                        {/*<label htmlFor="password">password</label>*/}
                        <input
                            className="inputFields"
                            type="password"
                            name="password"
                            value={password}
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
                            value={email}
                            id="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}/>
                </li>
                <li id="center-btn">
                    <input type="submit" id="join-btn" name="join" alt="Join" value="Join"/>
                </li>
            </ul>
        </form>
    </div>
</div>


</>
);
}
export default Login;