import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import {SearchProvider} from "./context/SearchContext.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <AuthContextProvider>
            <SearchProvider>
            {/*<React.StrictMode>*/}
                <App/>
            {/*</React.StrictMode>,*/}
        </SearchProvider>
        </AuthContextProvider>
    </Router>
)
