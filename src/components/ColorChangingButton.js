import React, { useState } from 'react';

const ColorChangingButton = () => {
    const [isRed, setIsRed] = useState(true);

    const handleClick = () => {
        setIsRed(!isRed);
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: isRed ? 'red' : 'green',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
            }}
        >
            {isRed ? 'Червоний' : 'Зелений'} кнопка
        </button>
    );
};

export default ColorChangingButton;