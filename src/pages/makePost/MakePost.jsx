import './MakePost.css';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import Post from "../../components/post/Post.jsx";
import useProfileImage from "../../hooks/useProfileImage.jsx";

function MakePost() {


    const [value, setValue] = useState('');
    const handleChange = (event) => {
        const {value: inputValue} = event.target;
        // Alleen toestaan: getallen, komma's, dollar- en eurotekens
        const regex = /^[0-9,€$-]*$/;
        if (regex.test(inputValue)) {
            setValue(inputValue);
        }
    }

    const YesNoButton = ({onClick, value}) => {
        return (
            <button className="yesNoButton" onClick={() => onClick(value)}>
                {value}
            </button>
        );
    };


    return (
        <>
            <form action="">
                <div className="makepostcontainer">


                    <div className="innermakepost">
                        <h2> Share Your consumerism</h2>
                        <br/>
                        <p> Caption:</p>
                        <input type="text"/>

                        <p> Picture:</p>

                        <label htmlFor="profilePhotoUpload">

                        </label>
                        <input
                            className="ProfilePictureUpload"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            name="profilePhotoUpload"
                            id="profilePhotoUpload"

                        />

                        <p>price: </p>

                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            placeholder="Enter numbers, commas, €, $ or -"
                        />


                        <p>Category: </p><select>
                        <option value="Cars">Cars</option>
                        <option value="Tech">Tech</option>
                        <option value="Decoration">Decoration</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Houses">Houses</option>
                        <option value="Other">Other</option>
                    </select>

                        <p>Would you recommend this product?</p>
                        <YesNoButton onClick={(value) => (value)} value="Yes"/>
                        <YesNoButton onClick={(value) => (value)} value="No"/>


                        <br/>
                        <br/>
                        {/*{warning && <p>{warning}</p>}*/}
                        <button className="postbutton" type="submit">post</button>
                    </div>
                </div>

            </form>
        </>
    );
}

export default MakePost;