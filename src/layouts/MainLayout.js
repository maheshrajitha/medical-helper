import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';

const MainLayout = (props) => (
    <div className={'vh-100'}>
        <div className={'h-100 w-100'} style={{ minHeight: '100%' }}>
            <Navigationbar/>
            {props.children}
            <Footer/>
        </div>
    </div>
    
);
export default MainLayout;