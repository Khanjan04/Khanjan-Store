import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../index.css';
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const [showLinks, setShowLinks] = useState(false);
    
    return (
        <div className="Navbar">
            <div className="leftSide">
                <Link to="/">Khanjan Store</Link>
            </div>
            <div className="rightSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Link to="/">Cart</Link>
                    {
                        userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                        <Link to="/signin">Sign In</Link>
                    }
                </div>
                <button onClick={() => setShowLinks(!showLinks)}> <ReorderIcon/> </button>
            </div>
        </div>
    )
}

export default Navbar;
