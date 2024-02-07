import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider, {AuthContext} from "./context/AuthContextProvider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <AuthContextProvider>
            {/*<React.StrictMode>*/}
                <App/>
            {/*</React.StrictMode>,*/}
        </AuthContextProvider>
    </Router>
)
