import './TestPage2.css';
import {Link} from "react-router-dom";

import {useState} from "react";
import axios from "axios";



function TestPage2() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const enabled = true

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

    return (
        <>
            <Link to="/testpage">
                <button>test page2</button>
            </Link>



            <form onSubmit={(e) => createUser(e)}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}/>

                <label htmlFor="password">password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>

                <label htmlFor="email">email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                <button type="submit">
                    submit
                </button>
            </form>
        </>
    );
}

export default TestPage2;