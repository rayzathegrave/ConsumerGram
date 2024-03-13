import './App.css'
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {Routes, Route, Navigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import Nav from "./components/navigation/Nav.jsx";
import MakePost from "./pages/makePost/MakePost.jsx";
import ProfilePost from "./pages/profilepost/ProfilePost.jsx";
import {AuthContext} from "./context/AuthContextProvider.jsx";
import {useContext} from "react";
import MyPost from "./pages/mypost/MyPost.jsx";
import MakePublicProfile from "./pages/makePublicProfile/MakePublicProfile.jsx";
import PublicProfile from "./pages/publicProfile/PublicProfile.jsx";
import AdminPage from "./pages/adminPage/AdminPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import ChangeUserData from "./pages/changeUserData/ChangeUserData.jsx";
import ScrollToTop from "./helpers/ScrollToTop.jsx";


function App() {

    const {isAuth, user} = useContext(AuthContext);

    return (
        <>

            <Nav/>

            <ScrollToTop/>

            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
                <Route path="/" element={<div><Helmet><title>ConsumerGram | Home</title></Helmet><Home/></div>}/>

                <Route path="/login" element={<div><Helmet><title>ConsumerGram | Login</title></Helmet><Login/></div>}/>

                <Route path="/PublicProfile"
                       element={<div><Helmet><title>ConsumerGram | Public Profile</title></Helmet><PublicProfile/>
                       </div>}/>
                <Route path="/MakePublicProfile" element={<div><Helmet><title>ConsumerGram | Make Public Profile</title>
                </Helmet><MakePublicProfile/></div>}/>


                <Route path="*"
                       element={<div><Helmet><title>ConsumerGram | NotFound</title></Helmet><NotFound/></div>}/>

                <Route path="/Profile"
                       element={<div><Helmet><title>ConsumerGram | Profile</title></Helmet>{isAuth ? <Profile/> :
                           <Navigate to="/login"/>}</div>}/>
                <Route path="/Makepost"
                       element={<div><Helmet><title>ConsumerGram | Make Post</title></Helmet>{isAuth ? <MakePost/> :
                           <Navigate to="/login"/>}</div>}/>
                <Route path="/MyPost"
                       element={<div><Helmet><title>ConsumerGram | My Post</title></Helmet>{isAuth ? <MyPost/> :
                           <Navigate to="/login"/>}</div>}/>

                <Route path="/changeUserData"
                       element={<div><Helmet><title>ConsumerGram | Change User Data</title></Helmet>{isAuth ? <ChangeUserData/> :
                           <Navigate to="/login"/>}</div>}/>




                <Route path="/ProfilePost/:id"
                       element={<div><Helmet><title>ConsumerGram | Post </title></Helmet><ProfilePost/></div>}/>

                <Route path="/PublicProfile/:username"
                       element={<div><Helmet><title>ConsumerGram | Profile </title></Helmet><PublicProfile/></div>}/>


                <Route
                    path="/AdminPage"
                    element={<div><Helmet><title>ConsumerGram | Admin </title>
                    </Helmet>{isAuth && user.role === 'ROLE_ADMIN' ? <AdminPage/> : <Navigate to="/login"/>}</div>}
                />

            </Routes>




        </>
    )
}

export default App
