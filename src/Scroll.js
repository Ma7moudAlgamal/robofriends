import React from "react";

const Scroll = (props) => {

    return(
        <div style={{overflowY: 'scroll', borderTop: '2px solid black', height: '600px', scrollbarWidth: "none"}}>
            {props.children}
        </div>
    )
}

export default Scroll