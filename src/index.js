import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Counter = ({ count, dec, inc, inc25, inc50 }) => (
    <div className="counter">
        <h1 className="counter__title">Счётчик</h1>
        <div className="counter__value">{count}</div>
        <div className="counter__footer">
            <div className="counter__additional-btns">
                <button className="counter__little-btn" type="button" onClick={inc25}>+25</button>
                <button className="counter__little-btn" type="button" onClick={inc50}>+50</button>
            </div>
            <div className="counter__main-btns">
                <button className="counter__big-btn" type="button" onClick={dec}><span className="counter__btn-text">−</span></button>
                <button className="counter__big-btn" type="button" onClick={inc}><span className="counter__btn-text">+</span></button>
            </div>
        </div>
    </div>
)

class App extends Component{
    state = {
        count: 0
    }

    dec = () => this.setState(({ count }) => ({ count: count-1 }))
    inc = () => this.setState(({ count }) => ({ count: count+1 }))
    inc25 = () => this.setState(({ count }) => ({ count: count+25 }))
    inc50 = () => this.setState(({ count }) => ({ count: count+50 }))

    render(){
        const { count } = this.state
        return(
            // Header
            <main className="main">
                <Counter count={count} dec={this.dec} inc={this.inc} inc25={this.inc25} inc50={this.inc50}/>
            </main>
            // Footer
        )
    }
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
);
