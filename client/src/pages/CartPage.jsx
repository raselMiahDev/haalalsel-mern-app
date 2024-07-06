import React from 'react';
import MasterLayout from './../components/MasterLayout/MasterLayout';
import CartList from '../components/User/CartList';

const CartPage = () => {
    return (
        <MasterLayout>
            <CartList/>
        </MasterLayout>
    );
};

export default CartPage;