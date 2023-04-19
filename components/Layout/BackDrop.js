import React from "react";

const BackDrop = ({ position_dad = "fixed" }) => {
    return (
        <div className="backdrop-dad" style={{ position: position_dad }}>
            <div className="backdrop-child">
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default BackDrop;
