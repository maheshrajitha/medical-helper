import React from 'react';
import logoMain from '../assets/logo-main.png'

const Logo = ({ sm }) => (
    <>
        <img src={logoMain} width={sm ? '5%' : '20%'} height={sm ? '5%' : '20%'} alt={'logo'} />
        {sm ? <>&nbsp;Channel Doc</> : <h2>Channel Doc</h2>}
    </>
);

export default Logo;