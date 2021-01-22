import {TOGGLE_AMOUNT, CLEAR_CART, REMOVE, GET_TOTALS} from './components/actions';

function reducer (state, action){

    if(action.type === TOGGLE_AMOUNT){
         const tempCart = state.cart.map(item => {
             if (item.id === action.payload.id){
                if (action.payload.toggle === 'inc'){
                    return item = {...item, amount: item.amount + 1};
                }else if(action.payload.toggle === 'dec'){
                    return item = {...item, amount: item.amount === 0 ? 0 : item.amount - 1};
                };
             };
             return item;
        });
        return {...state, cart: tempCart};
    };
    
    if(action.type === CLEAR_CART){
        return {...state, cart:[]};
    };
    if(action.type === REMOVE){
        const tempCart = state.cart.filter(item => item.id !== action.payload.id);
        return {...state, cart: tempCart};
    }

    if(action.type === GET_TOTALS){
        let totalQty = 0;
        let totalCash = 0;
        state.cart.map(item =>(totalCash += item.price * item.amount,
                               totalQty += item.amount  ));
         return {...state, amount: totalQty, total:parseFloat(totalCash.toFixed(2)) }   
    }
    return state;
};

export default reducer;