import React from 'react';

import faceLogo from '../../assets/Union.png'

import { Lable } from './styles';

export default function Header() {
  return (
    <Lable>
      <img src={faceLogo} alt=""/>
          <div>
            <i className="material-icons">account_circle</i>
            <span>Meu perfil</span>
          </div>
    </Lable>
  );
}
