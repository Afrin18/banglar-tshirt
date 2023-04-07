import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Thanks for wasting your money</h3>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order summary: 
            {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'green' : 'orange'}`}>Something</p>

            {
            cart.length > 2 
            ? <span className='purple'>aro kino</span> 
            : <span>Fokir</span>
            }

            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>
                        {tshirt.name}
                        <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                        </p>)
            }
            {
                cart.length === 2 && <p>Double bananza!!!</p>
            }
            {
                cart.length === 3 || <p>Three to hoilo na!!</p>
            }
        </div>
    );
};

export default Cart;

/**
 * Conditional Rendering
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is true then the next thing will be displayed)
 */

 /**
  * Conditional CSS 
  * 1. use ternary operator
  * 2. ternary inside template string
  */