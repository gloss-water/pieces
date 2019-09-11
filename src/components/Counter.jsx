import React, { useState } from "react";
import { connect } from "react-redux";
import CountUp from "react-countup";

/**
 * clicker style 'game' using hooks
 */
const Counter = ({ state, update }) => {
    const [interval, setAmount] = useState(500);
    const [previousNumber, updatePreviousNumber] = useState(state);
    const handleUp = () => {
        updatePreviousNumber(state);
        update(interval);
    }
    const handleDown = () => {
        updatePreviousNumber(state);
        update(-interval);
    }
    const handleUpgrade = () => {
        setAmount(interval * 3);
        update(-(interval * 6));
    }
    return (    
        <div>
            $<CountUp start={previousNumber} end={state} duration={3} />
            <br />
            <button onClick={handleUp}>add {interval}</button>
            <button onClick={handleDown}>remove {interval}</button>
            <br />
            { state >= interval * 6 && <button onClick={handleUpgrade}> ${interval * 6} - buy better button</button>}
        </div>
    )
}

const ConnectedCounter = connect(state => ({ state }), dispatch => ({
    update: (num) => dispatch({ type: "ADD_MONEY", data: num })
}))(Counter);

export { ConnectedCounter as Counter };