import './Home.css';
import Categories from "../../components/categories/Categories.jsx";
import Post from "../../components/post/Post.jsx";



function Home() {
    return (
        <>
            <div className="pimsouterbox">

                <div className="cat">
                    <Categories/>

                </div>




                <Post/>
            </div>

        </>
    );
}

export default Home;