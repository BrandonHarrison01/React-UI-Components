import React from 'react';
import './Button.css';

import NumberButton from './NumberButton';

function ActionButton() {

    const numbers = [
        { number: 7 },
        { number: 8 },
        { number: 9 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 1 },
        { number: 2 },
        { number: 3 }
    ];

    return(
        <div className='ActionButton'>
            <button className='ClearO'>clear</button>
            <NumberButton numbers={numbers}/>
            <button className='ClearO'>0</button>
        </div>
    )
}

export default ActionButton;