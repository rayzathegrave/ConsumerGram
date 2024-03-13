import './MakePublicProfile.css';
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import axios from "axios";


function MakePublicProfile() {


    const {user} = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        file: null,
        regio: "",
        bio: "",
        username: `${user.username}`
    });
    const token = localStorage.getItem("token")
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleChangeName = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeEmail = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const [previewUrl, setPreviewUrl] = useState(null);

// Modify your handleFileChange function
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({...formData, file: file});

        // Create a URL representing the file and set it as the new preview URL
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleChangeRegio = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeBio = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };


    async function uploadGegevens(event) {
        event.preventDefault();

        const url = `http://localhost:8080/user-profile/${user.username}`;
        console.log(user.username)
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("file", formData.file);
        formDataToSend.append("regio", formData.regio);
        formDataToSend.append("bio", formData.bio);
        formDataToSend.append("username", formData.username);


        console.log('form', formDataToSend)

        try {
            const response = await axios.post(url, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                }
            }); // Verstuur POST-verzoek met Axios

            if (response.status === 201) {
                console.log("Upload was a success!");
                setUploadStatus("Upload was a success!");
                console.log('form', formDataToSend)
            } else {
                console.error("Error posting blog", response.statusText);
                setUploadStatus("Error posting blog");
                console.log('form', formDataToSend)
            }
        } catch (error) {
            console.error("Error posting blog:", error);
            setUploadStatus("Network error. Please try again");
        }
        console.log("urlToSend:", url); // Log de URL om te verzenden

    }







    return (
        <>
            <div className="pimsouterbox">
                <div className="signupSection">
                    <div className="info">
                        <h2>Your public profile</h2>
                        <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                        <p>This information will be visible for everyone</p>




                        {previewUrl && <img src={previewUrl} alt="Preview" style={{maxWidth: "400px", maxHeight: "400px"}} />}





                        <p>See the rest of your public page here:</p>
                        <div id="center-btn">
                            <Link to={`/publicprofile/${user.username}`}> <input type="submit" id="join-btn" name="join" alt="Join"
                                                              value="Go to Public Profile"/></Link>
                        </div>




                    </div>

                    <form action="" className="signupForm">
                        <h2>Upload your Profile</h2>
                        <br/>
                        <ul className="noBullet">
                            <li>
                                <input
                                    className="inputFields"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    autoComplete="on"
                                    value={formData.email}
                                    onChange={handleChangeEmail}
                                    required

                                />
                            </li>
                            <li>
                                <input
                                    className="inputFields"
                                    placeholder="name"
                                    name="name"
                                    id="name"
                                    autoComplete="on"
                                    value={formData.name}
                                    onChange={handleChangeName}
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    className="inputFields"
                                    placeholder="region"
                                    name="regio"
                                    id="regio"
                                    autoComplete="on"
                                    value={formData.regio}
                                    onChange={handleChangeRegio}
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    className="inputFields"
                                    placeholder="bio"
                                    name="bio"
                                    id="bio"
                                    autoComplete="on"
                                    value={formData.bio}
                                    onChange={handleChangeBio}
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    className="inputFields"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    name="file"
                                    id="fileUpload"
                                    onChange={handleFileChange}
                                />
                            </li>

                            {/*{error && <p className="error">{error}</p>}*/}
                            {uploadStatus && <p>{uploadStatus}</p>}
                            <li id="center-btn">
                                <input type="submit" id="join-btn" name="join" alt="Join" value="Upload"
                                       onClick={uploadGegevens}/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>


        </>
    );
}

export default MakePublicProfile;