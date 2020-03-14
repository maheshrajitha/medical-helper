import React from 'react';
import logoMain from '../assets/logo-main.png'

const Logo = ({ sm , light  }) => (
    <>
        <img src={logoMain} width={sm ? '7%' : '20%'} height={sm ? '7%' : '20%'} alt={'logo'} />
        {sm ? <h5 className={light ? 'text-light': 'text-dark'}>&nbsp;Channel Doc</h5> : <h2 className={light ? 'text-white' :'text-dark'}>Channel Doc</h2>}
    </>
);

export default Logo;