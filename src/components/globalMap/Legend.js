import React from 'react';
// Legend is the styleing the legendItems and Using flex box 
const Legend = ({legendItems}) => {
   
    return ( 
        <div style={{
            display: "flex",
            alignItems: "center",}} >
            {legendItems.map((item)=>(
            <div
            key={item.title}
            style={{
                backgroundColor: item.color,
                border: "1px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.textColor,
                fontSize: "15px",
                height: "7vh",
                fontWeight: "bold",
            }}
            >
            <span>{item.title}</span>
            </div>
            ))} 
        </div>
     );
}
 
export default Legend;