import './Footer.css';
import {Link} from "react-router-dom";
import gmailIcon from "/src/assets/gmail.png";
import instagramIcon from "/src/assets/instagram.png";

function Footer() {

    return (
        <>
            <div className="footerOuterBox">


                <div className="footerBoxTop">
                    <hr/>
                </div>

                <div className="footerInnerBox">

                    <div className="footerBox1">
                        <Link to="/Contact">
                            <img src={gmailIcon} alt="Gmail icon"/>
                        </Link>
                    </div>
                    <div className="footerBox2">
                        <h5>© Consumer Gram </h5>
                    </div>
                    <div className="footerBox3">
                        <Link to="https://www.instagram.com/rayza.ig/">
                            <img src={instagramIcon} alt="Instagram icon"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;