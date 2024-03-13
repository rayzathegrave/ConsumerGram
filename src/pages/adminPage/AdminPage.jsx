import './AdminPage.css';
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import {useContext, useState} from "react";
import axios from "axios";

function AdminPage() {

    const { user } = useContext(AuthContext);
    const [postId, setPostId] = useState(""); // State toegevoegd voor postId
    const [username, setUsername] = useState(""); // State toegevoegd voor username
    const token = localStorage.getItem("token")
    const handleDelete = () => {

        console.log(postId);
        axios.delete(`http://localhost:8080/blog-posts/${user.username}/${postId}`,{headers: {

                Authorization: `Bearer ${token}`
            }})

            .then(response => {
                console.log('Post deleted successfully');
                window.location.reload(); // Herlaad de pagina na succesvol verwijderen
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };

    const handleDeleteUser = () => {
        const token = localStorage.getItem("token")
        axios.delete(`http://localhost:8080/users/${username}`,{headers: {
                Authorization: `Bearer ${token}`
            }})
            .then(response => {
                console.log('User deleted successfully');
                window.location.reload(); // Herlaad de pagina na succesvol verwijderen
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };


    return (
        <>
<div className= "admindiv">
            <form className="adminRedfield" action="" onSubmit={(e) => { e.preventDefault(); handleDelete() }}>

                <label htmlFor="deleteBlog">
                    <p>Delete Post</p>
                </label>
                <input
                    className="textAreaOneLine"
                    name="deleteBlog"
                    id="deleteBlog"
                    placeholder="Type a post ID and press delete"
                    autoComplete="on"
                    value={postId} // Waarde van de input gekoppeld aan postId
                    onChange={(e) => setPostId(e.target.value)} // onChange event handler om postId bij te werken
                />
                <br/>
                <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                    Delete <strong>post</strong>
                </button>
            </form>


            <form className="adminRedfield" onSubmit={(e) => { e.preventDefault(); handleDeleteUser() }}>
                <label htmlFor="deleteUser">
                    <p>Delete User</p>
                </label>
                <input
                    className="textAreaOneLine"
                    name="deleteUser"
                    id="deleteUser"
                    placeholder="Type the username and press delete"
                    autoComplete="on"
                    value={username} // Waarde van de input gekoppeld aan username
                    onChange={(e) => setUsername(e.target.value)} // onChange event handler om username bij te werken
                />
                <br/>
                <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                    Delete <strong>user</strong>
                </button>
            </form>
        </div>

        </>
    );
}

export default AdminPage;

