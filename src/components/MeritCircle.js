import { Link } from "react-router-dom";

const MeritCircle = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar"><img src="https://www.bancassurances.ch/data/images/accroches/accrocheImmo.png" className="homebutton" alt=""/></Link>
            </nav>
            <center>
                <iframe src="https://treasury.meritcircle.io/" title="treasury" width="100%" height="1325px" scrolling="no" className="treasury--display"></iframe>
            </center>
        </>
    )
};

export default MeritCircle;