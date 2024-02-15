import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {AuthContext} from "../context/AuthContextProvider.jsx";

function useProfileImage() {
    const { user } = useContext(AuthContext);
    const [profileImage, setProfileImage] = useState(null);
    const [download, triggerDownload] = useState(false);


    useEffect(() => {
        async function getImage() {
            try {
                const response = await axios.get(`http://localhost:8080/image/${user.username}`, {
                    responseType: 'arraybuffer',
                });
                const blob = new Blob([response.data], { type: 'image/png' });
                const dataUrl = URL.createObjectURL(blob);
                setProfileImage(dataUrl);
            } catch (error) {
                console.error(error);
            }
        }
        void getImage();
    }, [user.username, download]);

    return { profileImage };
}

export default useProfileImage;
