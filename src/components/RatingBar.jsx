import React from 'react';

function RatingBar({percentLiberal, percentConservative}) {
    const gradientStyle = {
        background: `linear-gradient(
            to right,
            red ${percentConservative}%,
            blue ${percentLiberal}%
        )`,
        width: '100%',
        height: '30px',
        borderRadius: '5px'
    };

    return (
       <div className="rating-bar" style={gradientStyle}></div>
    );
}

export default RatingBar;
