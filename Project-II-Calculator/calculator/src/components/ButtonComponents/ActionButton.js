import React from 'react';
import './Button.css';

import NumberButton from './NumberButton';

function ActionButton() {
    return(
        <div>
            <button className='ActionButton'>clear</button>
            <NumberButton />
            <button className='ActionButton'>0</button>
        </div>
    )
}

export default ActionButton;