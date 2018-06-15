import React, { Component } from 'react';

const cart = ({cartCount}) =>{
    return (
      <div className='cart-cont'>
        <div className='cart-count'>
            Cart : {cartCount}
        </div>
      </div>
    );
}

export default cart;
