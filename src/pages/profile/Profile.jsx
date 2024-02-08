import './Profile.CSS';
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import {useContext, useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get(`http://localhost:8080/authenticated`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [])



    return (
        <>



            {/*{Object.keys(profileData).length > 0 &&*/}
            {user &&
                <section>

                    <div className="profile-container">
                        <h2>Profile</h2>
                        <p> <strong>Email:</strong>  {user.email}</p>
                        <p> <strong>Username:</strong> {user.username}</p>
                        <p><strong>Password:</strong> ******** </p>

                    </div>


                    <h2>Strikt geheime profiel-content</h2>
                    <h3>{profileData.title}</h3>
                    <p>{profileData.content}</p>


                </section>
            }
            <p>Terug naar de <Link to="/">Homepagina</Link></p>

        </>
    );
}

export default Profile;