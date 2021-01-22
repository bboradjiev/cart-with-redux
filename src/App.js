import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {cartItems} from "./cart-items";

//redux imports
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
 
const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0,
};

const store = createStore(reducer, initialStore);

function App() {

  return (
    <Provider store={store}>
            <Navbar />
            <CartContainer/>
    </Provider>
  );
}

export default App;