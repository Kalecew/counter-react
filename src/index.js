import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';





class App extends Component{
    render(){
        return(
        <div className="counter">
            <h1 className="counter__title">Счётчик</h1>
            <div className="counter__value">0</div>
            <div className="counter__footer">
                <div className="counter__additional-btns">
                    <button className="counter__little-btn" type="button">+25</button>
                    <button className="counter__little-btn" type="button">+50</button>
                </div>
                <div className="counter__main-btns">
                    <button className="counter__big-btn" type="button"><span class="counter__btn-text">-</span></button>
                    <button className="counter__big-btn" type="button"><span class="counter__btn-text">+</span></button>
                </div>
            </div>
        </div>
        )
    }
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
);
