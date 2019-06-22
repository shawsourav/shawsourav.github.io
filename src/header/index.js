import React from 'react';
import WebDev from './assets/web_dev.png';
import {Title} from './styled';

const Header = (props) => {
    return (
        <header>
            <Title>souravshaw.me</Title>
            <img src={WebDev}/>
        </header>
    )
}

export default Header;