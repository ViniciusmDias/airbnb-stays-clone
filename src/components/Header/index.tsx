import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { GiWorld } from 'react-icons/gi';
import logo from '../../assets/airbnb-logo.png';
import { Container, Form } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="logo airbnb" />
        <Form>
          <input defaultValue="Florianópolis, Brasil" />
          <input defaultValue="9 de mai. - 12 de mai." />
          <input id="insert" placeholder="Insira o número de hóspedes" />
          <button>
            <FiSearch size={20} color={'#FF385C'} />
          </button>
        </Form>
        <div>
          <button>
            <GiWorld size={20} />
          </button>
          <a href="https://www.airbnb.com.br">Ajuda</a>
          <a href="https://www.airbnb.com.br">Cadastrar-se</a>
        </div>
      </Container>
    </>
  );
};

export default Header;
