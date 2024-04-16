import './NotFound.css';
import {useNavigate} from "react-router-dom";

function NotFound() {

    const handleTerugClick = () => {
        navigate(-1); // Navigeer terug naar de vorige pagina
    };
    const navigate = useNavigate();

    return (
        <>
            <h1>404 - Not Found!</h1>

            <button type="button" className="simpleButtons" onClick={handleTerugClick}> Back to the previous page?
            </button>

        </>
    );
}

export default NotFound;