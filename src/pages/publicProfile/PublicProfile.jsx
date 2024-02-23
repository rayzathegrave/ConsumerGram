import './PublicProfile.css';
import {Link, useParams} from "react-router-dom";
import useBlogPosts from "../../hooks/useBlogPosts.jsx";
import useProfile from "../../Hooks/useAllUserProfiles.jsx";


function PublicProfile() {

    // ALLEEN NOG REVERSE TOEVOEGEN
    const {blogPosts} = useBlogPosts();

    //Haal de gebruikersprofielen op uit de hook

    const {AllUserProfiles} = useProfile();

    const {username} = useParams(); // Haal de gebruikersnaam op uit de URL

    // Filter de gebruikersprofielen op basis van de gebruikersnaam in de URL
    const filteredProfile = AllUserProfiles.filter(prof => prof.username === username);

    // Filter blog posts by username
    const filteredPosts = blogPosts.filter(post => post.username === username);

    const totalPosts = filteredPosts.length;


    return (
        <>
            <div className="profile-container">
                <div className="inner-content-container-column">
                    {/* Als er een gebruikersprofiel is gevonden, toon dan de gegevens */}
                    {filteredProfile.length > 0 ? (
                        filteredProfile.map((prof) => (
                            <>
                                <img
                                    src={"data:image/png;base64," + prof.fileContent}
                                    alt="Profiel foto"
                                    style={{width: 100, height: 100}}/>

                                <p>Username: {prof.username}</p>
                                <p>Profielpagina van {prof.name}</p>
                                <p>Email: {prof.email}</p>
                                <p>Region: {prof.regio}</p>
                                <p>Bio: {prof.bio}</p>
                                <br/><br/>


                                <strong><p className="totalBlogsCounter"> {username} already
                                    has {totalPosts} contributions</p>
                                </strong>


                            </>
                        ))
                    ) : (
                        // Als er geen gebruikersprofiel is gevonden, toon dan dit bericht
                        <p>This user doesnt have a public profile :(</p>
                    )}
                </div>
            </div>

            <div className="fundiv">
                <h2>Everyone (including the FBI) can see this information</h2>
                <p>Back to the <Link to="/">Homepage</Link></p>
            </div>



                    {filteredPosts.map((post) => (
                        <li key={post.id} className="blog-post-item">
                            <Link to={`/ProfilePost/${post.id}`} className="post-link">
                                <div className="post-image">
                                    <div className="onTopOfImageBox">
                                        <p className="post-title">{post.caption}</p>
                                        <p>Geschreven door <strong>{post.username}</strong></p>
                                        <img src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>

                                        <p> Category: {post.categories}</p>
                                        <p>Price: {post.price}</p>

                                        <p> Satisfied: {post.yesNoOption ? 'Yes' : 'No'}</p>

                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}


        </>
    );
}


export default PublicProfile;