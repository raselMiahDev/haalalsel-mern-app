import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

const MasterLayout = ({children}) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;