import './App.css'
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {Routes, Route, Navigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import Nav from "./components/navigation/Nav.jsx";
import MakePost from "./pages/makePost/MakePost.jsx";
import {AuthContext} from "./context/AuthContextProvider.jsx";
import {useContext} from "react";

function App() {

const {isAuth} = useContext(AuthContext);

    return (
        <>

            <Nav />

            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
                <Route path="/" element={<div><Helmet><title>ConsumerGram | Home</title></Helmet><Home /></div>}/>
                <Route path="/login" element={<div><Helmet><title>ConsumerGram | Login</title></Helmet><Login /></div>}/>
                {/*<Route path="/Profile" element={<div><Helmet><title>ConsumerGram | Profile</title></Helmet><Profile /></div>}/>*/}
                {/*<Route path="/Makepost" element={<div><Helmet><title>ConsumerGram | Make post</title></Helmet><MakePost /></div>}/>*/}
                <Route path="*" element={<div><Helmet><title>ConsumerGram | NotFound</title></Helmet><NotFound /></div>}/>

                <Route path="/Profile" element={isAuth ? <Profile /> : <Navigate to="/" />} />
                <Route path="/Makepost" element={isAuth ? <MakePost /> : <Navigate to="/" />} />

            </Routes>

        </>
    )
}

export default App
