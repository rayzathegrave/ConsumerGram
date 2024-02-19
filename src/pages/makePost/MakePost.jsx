import './MakePost.css';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import Post from "../../components/post/Post.jsx";
import useProfileImage from "../../hooks/useProfileImage.jsx";

function MakePost() {


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
                        {/*{warning && <p>{warning}</p>}*/}
                        <button className="postbutton" type="submit">post</button>
                    </div>
                </div>

            </form>
        </>
    );
}

export default MakePost;