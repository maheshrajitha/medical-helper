import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';

const MainLayout = (props) => (
    <div className={'h-100 w-100'}>
            <Navigationbar/>
                {props.children}
            <Footer/>
    </div>
    
);
export default MainLayout;