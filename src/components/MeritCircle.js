import { Link } from "react-router-dom";

const MeritCircle = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar">Home</Link>
            </nav>
            <center>
                <h1 align="center">merit circle DAO treasury</h1>
                <iframe src="https://treasury.meritcircle.io/" title="treasury" width="100%" height="1325px" scrolling="no" className="treasury--display"></iframe>
            </center>
        </>
    )
};

export default MeritCircle;