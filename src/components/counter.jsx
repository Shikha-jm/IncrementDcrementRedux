import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './../redux/action/index'

function Counter() {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
       <>
        <div className='container'>
            <h1>Increment/Decrement counter</h1>
            <h4>using React and Redux</h4>
            <div className='quantity'>
                <a className='quantity_minus' onClick={ () => dispatch(decNumber())}><span>-</span></a>
                <input type="text" name='quantity' className='quantity_input' value={myState}/>
                <a className='quantity_plus' onClick={ () => dispatch(incNumber()) }><span>+</span></a>
            </div>
        </div>
       </>
    );
}

export default Counter;