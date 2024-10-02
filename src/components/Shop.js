import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Shop = () => {
    //UPDATING STATE
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    
    //ACCESSING STATE
    const balance = useSelector(state => state.amount);

    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <div className="d-flex">
                {/* LONGER VERSION */}
                {/* <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button> */}

                <button className="btn btn-primary" onClick={()=>withdrawMoney(100)}>-</button>
                <strong className="my-2 mx-4">Update Balance ({balance})</strong>
                <button className="btn btn-primary" onClick={()=>depositMoney(100)}>+</button>
            </div>
        </div>
    )
}

export default Shop
