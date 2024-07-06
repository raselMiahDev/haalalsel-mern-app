import React from 'react';
import Footer from '../common/Footer';
import HeaderTwo from '../common/HeaderTwo';
import TopHeader from '../common/TopHeader';
import HeaderThree from '../common/HeaderThree';

const MasterLayout = ({children}) => {
    return (
        <div>
            <HeaderThree/>
            {/* <HeaderTwo/> */}
            {children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;