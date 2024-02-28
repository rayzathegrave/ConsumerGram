import './Profile.CSS';
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import {useContext, useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import useProfileImage from "../../hooks/useProfileImage.jsx";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const {user} = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState({});
    const [warning, setWarning] = useState('');
    // const [download, triggerDownload] = useState(false);
    const {profileImage} = useProfileImage();


    const handleFileChange = (event) => {
        const selected = event.target.files[0];
        setWarning('');
        // Controleer of er een bestand is geselecteerd
        if (selected) {
            // Gebruik een FileReader om het bestand in te lezen en de afmetingen te controleren
            const reader = new FileReader();
            reader.readAsDataURL(selected);
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    // Afbeelding limiet in pixels
                    if (img.width <= 1000 && img.height <= 1000) {
                        // Controleer of het bestand de maximale grootte niet overschrijdt (10000 bytes is gelijk aan 10 kilobytes (KB))
                        if (selected.size <= 10000000) {
                            // Als het bestand binnen de grenzen valt, stel het in als geselecteerd bestand
                            setSelectedFile(selected);
                            console.log(selected);
                        } else {
                            setWarning('Maximum allowed size is 10 KB');
                        }
                    } else {
                        setWarning('Image is bigger than 1000 x 1000 pixels.');
                    }
                };
            };
        }
    };


    async function deleteOldImage() {
        const token = localStorage.getItem("token")
        try {
            axios.delete(`http://localhost:8080/image/${user.username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

        } catch (error) {
            console.error("Something went wrong with deleting your old image", error);
        }
    }

    async function uploadImage() {
        if (selectedFile) {
            // Verwijder de oude afbeelding
            deleteOldImage();
 const token = localStorage.getItem("token")
            // Upload de nieuwe afbeelding nadat de oude is verwijderd
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('username', user.username);

            try {
                const response = await axios.post('http://localhost:8080/image', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log(response);
                window.location.reload();
            } catch (error) {
                console.error("Something went wrong with uploading an image", error);
            }
        } else {
            console.warn("Select a file first.");
        }
    }


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
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Password:</strong> ******** </p>
                        <p><strong>User role:</strong> {user.role} </p>

                        <input
                            className="ProfilePictureUpload"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            name="profilePhotoUpload"
                            placeholder="Upload een profielfoto"
                            id="profilePhotoUpload"
                            onChange={handleFileChange}

                        />


                        <div className="profile-image">
                            {profileImage && <img src={profileImage} alt="Profiel foto"
                                                  style={{width: '200px', height: '200px'}}/>}
                        </div>

                        <button type="submit" onClick={uploadImage}>Upload file</button>
                    </div>

                    <div className="fundiv">
                        <h2>Only you (and the FBI) can see this information</h2>
                        <p> Make a public profile <Link to="/makepublicprofile">Go here</Link></p>
                        <p> Already have one? <Link to={`/PublicProfile/${user.username}`}>Go here</Link></p>
                    </div>

                </section>
            }


        </>
    );
}

export default Profile;