import React from 'react';
import DashboardLayOut from '../../components/Dashboard/DashboardLayOut';
import ProductCreateUpdate from '../../components/Dashboard/ProductCreateUpdate';

const ProductCreateUpdatePage = () => {
    return (
        <DashboardLayOut>
            <ProductCreateUpdate/>
        </DashboardLayOut>
    );
};

export default ProductCreateUpdatePage;