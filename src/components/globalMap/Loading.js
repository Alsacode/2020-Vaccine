import React from 'react';
// If there is no Data then the web will be on the loading mode.
// Defined by bootstrap
const Loading = () => {
    return (  
        <div 
           style={{height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
           <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden"></span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden"></span>
            </div>
            <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden"></span>
            </div>
            <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden"></span>
            </div>
        </div>
    );
}
 
export default Loading;