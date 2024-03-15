import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider.jsx";
import axios from "axios";

function UseAllUserProfiles() {
    const [AllUserProfiles, setUserProfile] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/user-profile`);
                setUserProfile(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchData();
    }, []);

    return { AllUserProfiles };
}

export default UseAllUserProfiles;
