import { produce } from 'immer';
import createReducer from './reducerUtil';

const initialState = {
    cities: [
        { id: 1, description: "milk", price: 5, qut: 10 },
        { id: 2, description: "Packaged bread", price: 5, qut: 10 },
        { id: 3, description: "Brown bread", price: 10, qut: 10 },
        { id: 4, description: "soya", price: 11, qut: 10 },
        { id: 5, description: "bread", price: 5, qut: 10 },
        { id: 6, description: "cake", price: 25, qut: 10 },
        { id: 7, description: "bamba", price: 5, qut: 10 },
        { id: 8, description: "ice cream", price: 6, qut: 10 },
        { id: 9, description: "bisly", price: 5, qut: 10 }
    ]
}

const products = {
    changeQut(state, action) {
        const prod = state.products.find(prod => prod.id == action.payload.id);
        state.products.find(prod => prod.id == action.payload.id).qut = prod.qut - action.payload.changeQut;
    }
}

export default produce((state, action) => createReducer(state, action, products), initialState)