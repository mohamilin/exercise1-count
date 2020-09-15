import React, {useState} from 'react';
import './Count.css';

const CountFunction = () => {

    const [number, setNumber] = useState(0);


    const numberMinus = () => {
        if(number > 0){
            setNumber(number - 1)
        }
    }

    const numberPlus = () => {
        setNumber(number + 1)
    }

    return (
        <div className="content-wrapper">
              <div className="image-count">
                    <img src="https://moondoggiesmusic.com/wp-content/uploads/2018/09/Gambar-Buah-Anggur.jpg" alt="" />
                </div>
            <button className="minus" onClick={numberMinus} >-</button>
            <p className="number">{number}</p>
            <button className="plus" onClick={numberPlus} >+</button>
        </div>
    )
}

export default CountFunction;