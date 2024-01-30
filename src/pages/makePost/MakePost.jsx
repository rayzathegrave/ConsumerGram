import './MakePost.css';

function MakePost() {
    return (
        <>

            <div className="makepostcontainer">



                <div className="innermakepost">
                <h2> Share Your consumerism</h2>
                    <p> Caption:</p>
                    <input type="text" />
                    <p> Picture:</p>
                    <input type="file" accept="image/*" />
                    <p>Category: </p><select>
                        <option value="Cars">Cars</option>
                        <option value="Tech">Tech</option>
                        <option value="Decoration">Decoration</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Houses">Houses</option>
                        <option value="Other">Other</option>
                    </select>
<br />
<br />
                    <button type="submit">post</button>
                </div>
            </div>


        </>
    );
}

export default MakePost;