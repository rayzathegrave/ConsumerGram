import './MakePost.css';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import Post from "../../components/post/Post.jsx";
import useProfileImage from "../../hooks/useProfileImage.jsx";

function MakePost() {

    const {user} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        caption: "",
        price: "",
        file: null,
        yesNoOption: false,
        username: `${user.username}`,
        categories: [''],

    });

    const [uploadStatus, setUploadStatus] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const [value, setValue] = useState('');
    const handleChange = (event) => {
        const {value: inputValue} = event.target;
        // Alleen toestaan: getallen, komma's, dollar- en eurotekens
        const regex = /^[0-9,€$-]*$/;
        if (regex.test(inputValue)) {
            setValue(inputValue);
        }
    }


    const handleChangeCaption = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({...formData, file: file});
    };

    const handleChangePrice = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };


    // const handleChangeCategories = (event) => {
    //     const {value} = event.target;
    //     setFormData({...formData, categories: value});
    // };

    const handleChangeCategories = (event) => {
    const {value} = event.target;
    // console.log("Selected category:", value); // Add this line
    setFormData({...formData, categories: value});
};




    const handleChangeYesOrNo = (event, value) => {
        event.preventDefault();
        setSelectedOption(value);
        setFormData({...formData, yesNoOption: value === 'Yes' ? true : false});
    };


    async function uploadGegevens(event) {
        event.preventDefault();

        const url = `http://localhost:8080/blog-posts/${user.username}`;
        console.log(user.username)
        const formDataToSend = new FormData();
        formDataToSend.append("caption", formData.caption);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("file", formData.file); // Voeg het bestand toe aan de FormData

        // // Voeg de overige velden toe aan de FormData
        formDataToSend.append("categories", formData.categories);
        // formDataToSend.append("yesOrNo", formData.yesNoOption);
        formDataToSend.append("yesNoOption", formData.yesNoOption);
        formDataToSend.append("username", formData.username);

        console.log('form', formDataToSend)
        const token = localStorage.getItem("token")
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
    }




    return (
        <>
            <form action="">
                <div className="makepostcontainer">


                    <div className="innermakepost">
                        <h2> Share Your consumerism</h2>
                        <br/>


                        <label className="textStart" htmlFor="caption">
                            {/*<p>Caption: </p>*/}
                        </label>



                        <input
                            className="textAreaOneLine"
                            type="text"
                            name="caption"
                            id="caption"
                            autoComplete="on"
                            value={formData.caption}
                            onChange={handleChangeCaption}
                            placeholder="Caption"
                        />




                        <label className="textStart" htmlFor="fileUpload">
                            <br/>
                            {/*<p> Picture:</p>*/}
                        </label>
                        <br/>

                        <div className="file-upload-container">
                            <input
                                className="textAreaOneLine"
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                name="file"
                                id="fileUpload"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="fileUpload">Upload File</label>
                        </div>


                        <label className="textStart" htmlFor="price">
                            <br/>
                            {/*<p>Price: </p>*/}
                        </label>

                        <div className="input-container">
                            <input
                                type="text"
                                name="price"
                                id="price"
                                autoComplete="on"
                                value={formData.price}
                                onChange={handleChangePrice}
                                placeholder="Enter numbers, commas, €, $ or -"
                            />
                        </div>


                        <div className="select-container">
                            <br/>
                            {/*<p>Category: </p>*/}
                            <select onChange={handleChangeCategories}>
                                <option value="please select a category">please select a category</option>
                                <option value="Cars">Cars</option>
                                <option value="Tech">Tech</option>
                                <option value="Decoration">Decoration</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Houses">Houses</option>
                                <option value="Other">Other</option>
                            </select>

                        </div>


                        <label htmlFor="yesNo">
                            <p> Would you recommend this product?</p>
                        </label>


                        <button className="yesNoButton" onClick={(event) => handleChangeYesOrNo(event, "Yes")}>Yes</button>
                        <button className="yesNoButton" onClick={(event) => handleChangeYesOrNo(event, "No")}>No</button>
                        {selectedOption && <p>You selected: {selectedOption}</p>}

                        <br/>
                        <br/>
                        {/*{warning && <p>{warning}</p>}*/}
                        <button className="postbutton" type="submit" onClick={uploadGegevens}>Post</button>
                        {uploadStatus && <p>{uploadStatus}</p>}

                        {/*<button className="postbutton" type="submit">post</button>*/}
                    </div>
                </div>

            </form>
        </>
    );
}

export default MakePost;


