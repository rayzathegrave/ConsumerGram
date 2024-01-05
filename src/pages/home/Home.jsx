import './Home.css';
import Categories from "../../components/categories/Categories.jsx";
import Post from "../../components/post/Post.jsx";


function Home() {
    return (
        <>

            <div className= "cat" >
                <Categories/>
            </div>

            <Post/>


        </>
    );
}

export default Home;