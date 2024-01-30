import './Login.css';
function Login() {
return (
<>

<div className="pimsouterbox">
    <div className="signupSection">
        <div className="info">
            <h2>Welcome to ConsumerGram</h2>
            <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
            <p>The Future Is Here</p>
            <ul className="noBullet">
                <li>
                    <label htmlFor="username"></label>
                    <input type="text" className="inputFields" id="username" name="username" placeholder="Username" value="" onInput="return userNameValidation(this.value)" required/>
                </li>
                <li>
                    <label htmlFor="password"></label>
                    <input type="password" className="inputFields" id="password" name="password" placeholder="Password" value="" onInput="return passwordValidation(this.value)" required/>
                </li>
                <li id="center-btn">
                    <input type="submit" id="join-btn" name="Login" alt="Login" value="Login"/>
                </li>
                </ul>
        </div>
        <form action="#" method="POST" className="signupForm" name="signupform">
            <h2>Sign Up</h2>
            <ul className="noBullet">
                    <li>
                        <label htmlFor="username"></label>
                        <input type="text" className="inputFields" id="username" name="username" placeholder="Username" value="" onInput="return userNameValidation(this.value)" required/>
                    </li>
                    <li>
                        <label htmlFor="password"></label>
                        <input type="password" className="inputFields" id="password" name="password" placeholder="Password" value="" onInput="return passwordValidation(this.value)" required/>
                    </li>
                    <li>
                    <label htmlFor="email"></label>
                    <input type="email" className="inputFields" id="email" name="email" placeholder="Email" value="" required/>
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