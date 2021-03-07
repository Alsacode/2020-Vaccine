import React from 'react';


const LoadingSpinner = () => {
    return (
        <div
        style={{height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}
           >
            <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden"></span>
            </div>
        </div>
    );
}
 
export default LoadingSpinner;