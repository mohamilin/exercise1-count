import React from 'react';
import './Count.css';

class CountClass extends React.Component {
    state = {
        number: 0
    }

    numberMinus = () => {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    numberPlus = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    render() {
        return (
            <div className="content-wrapper">
                <div className="image-count">
                    <img src="https://moondoggiesmusic.com/wp-content/uploads/2018/09/Gambar-Buah-Anggur.jpg" alt="" />
                </div>

                <button className="minus" onClick={this.numberMinus} >-</button>
                <p className="number">{this.state.number}</p>
                <button className="plus" onClick={this.numberPlus} >+</button>
            </div>
        )
    }
}

export default CountClass;