import './Footer.css';




function Footer(props) {

    return (
        <>
            <div className="footerOuterBox">


                <div className="footerBoxTop">
                    <hr/>
                </div>

                <div className="footerInnerBox">


                    <div className="footerBox2">
                        <h4>© Consumer Gram {props.year} </h4>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Footer;