import './MakePost.css';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import Post from "../../components/post/Post.jsx";
import useProfileImage from "../../hooks/useProfileImage.jsx";

function MakePost() {

    const {user} = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState({});
    const [warning, setWarning] = useState('');
    // const [download, triggerDownload] = useState(false);
    const {profileImage} = useProfileImage();

    // console.log("logje" + user.username);
    // const handleFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    //     // const maxDimension = 5000 * 5000; // Maximale afmeting in pixels
    //     //
    //     // if (selectedFile && selectedFile.size > maxDimension) {
    //     //     alert('Maximale toegestane grootte is 100x100 pixels');
    //     // } else {
    //     // eslint-disable-next-line no-inner-declarations
    //     console.log(event.target.files[0])
    // };


    // -------------------------------------------------------------------

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
                            setWarning('Maximale toegestane grootte is 10 KB');
                        }
                    } else {
                        setWarning('Afbeelding is groter dan 1000 x 1000 pixels.');
                    }
                };
            };
        }
    };

    // ------------------------------------------------------------------




    async function deleteOldImage() {
        try {
            axios.delete(`http://localhost:8080/image/${user.username}`);
        } catch (error) {
            console.error("Fout bij het verwijderen van de oude afbeelding:", error);
        }
    }

    async function uploadImage() {
        if (selectedFile) {
            // Verwijder de oude afbeelding
            deleteOldImage();

            // Upload de nieuwe afbeelding nadat de oude is verwijderd
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('username', user.username);

            try {
                const response = await axios.post('http://localhost:8080/image', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
                console.log(response);
            } catch (error) {
                console.error("Fout bij het uploaden van de afbeelding:", error);
            }
        } else {
            console.warn("Selecteer een afbeelding om te uploaden.");
        }
    }

















    // ------------------------------------------------------------------



    // async function uploadImage() {
    //     const formData = new FormData();
    //     formData.append('file', selectedFile);
    //     // formData.append('username', "test");
    //     formData.append('username', user.username);
    //     console.log(selectedFile)
    //
    //     try {
    //         const response = await axios.post('http://localhost:8080/image',
    //             formData,
    //             // username: 'test'
    //             {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data",
    //                 }
    //             });
    //         console.log(response);
    //         triggerDownload(!download);
    //     } catch (error) {
    //
    //         console.error(error);
    //     }
    //     // }
    // }

    // useEffect(() => {
    //     async function getImage() {
    //         console.log(user)
    //         try {
    //             // const username = "test"; // Replace "test" with the actual username
    //             const response = await axios.get(`http://localhost:8080/image/${user.username}`, {responseType: 'arraybuffer'});
    //             // const response = await axios.get('http://localhost:8080/image');
    //             console.log(response.data)
    //             const blob = new Blob([response.data], { type: 'image/png' });
    //             const dataUrl = URL.createObjectURL(blob);
    //             setProfileImage(dataUrl);
    //
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     void getImage();
    // }, [download]);


    return (
        <>
            <form action="">
            <div className="makepostcontainer">


                <div className="innermakepost">
                    <h2> Share Your consumerism</h2>
                    <p> Caption:</p>
                    <input type="text"/>
                    <p> Picture:</p>
                    {/*<input type="file" accept="image/*" />*/}

                    {/*IMAGE UPLOAD*/}
                    <label htmlFor="profilePhotoUpload">

                    </label>
                    <input
                        className="ProfilePictureUpload"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        name="profilePhotoUpload"
                        id="profilePhotoUpload"
                        onChange={handleFileChange}
                    />
                    <button type="submit" onClick={uploadImage}>Upload mij!</button>
                    {/*{profileImage && <img src={profileImage} alt="Profiel foto"/>}*/}


                    {profileImage && <img src={profileImage} alt="Profiel foto"
                                          style={{width: '400px', height: '400px'}}/>}

                    <p>Category: </p><select>
                    <option value="Cars">Cars</option>
                    <option value="Tech">Tech</option>
                    <option value="Decoration">Decoration</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Houses">Houses</option>
                    <option value="Other">Other</option>
                </select>


                    <br/>
                    <br/>
                    {warning && <p>{warning}</p>}
                    <button type="submit">post</button>
                </div>
            </div>

            </form>
        </>
    );
}

export default MakePost;