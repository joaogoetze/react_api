import React from 'react';

function ResusableButton({ onPress, title}) {
    return(
        <button onClick={onPress}>
            {title}
        </button>
    );
}

export default ResusableButton;