import './App.css'
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {Routes, Route} from "react-router-dom";
import {Helmet} from "react-helmet";
import Nav from "./components/navigation/Nav.jsx";

function App() {


    return (
        <>
            <body>
            <Nav />
 
            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
                <Route path="/" element={<div><Helmet><title>ConsumerGram | Home</title></Helmet><Home /></div>}/>
                <Route path="/login" element={<div><Helmet><title>ConsumerGram | Login</title></Helmet><Login /></div>}/>
                <Route path="/Profile" element={<div><Helmet><title>ConsumerGram | Profile</title></Helmet><Profile /></div>}/>

                <Route path="*" element={<div><Helmet><title>ConsumerGram | NotFound</title></Helmet><NotFound /></div>}/>

            </Routes>
        </body>
        </>
    )
}

export default App
