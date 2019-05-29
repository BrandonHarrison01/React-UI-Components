import React from 'react';
import './Button.css';


function NumberButton(props) {
    return(
        // <button className={props.buttonStyle}>{props.text}</button>
        <div className='NumberButton'>
            {props.numbers.map(num => {
                return <button className='NumBtn'>{num.number}</button>;
            })}
            {/* <p className='NumberButton'><button>7</button> <button>8</button> <button>9</button></p>
            <p className='NumberButton'><button>4</button> <button>5</button> <button>6</button></p>
            <p className='NumberButton'><button>1</button> <button>2</button> <button>3</button></p> */}
        </div>
    )
};


// NumberButton.defaultProps = {
//     buttonStyle: 
// };


export default NumberButton;