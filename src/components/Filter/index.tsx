import React from 'react';

import { Container } from './styles';

import alarmImg from '../../assets/alarm.gif';

const Filter: React.FC = () => {
  return (
    <>
      <Container>
        <p>Mais de 300 acomodações · 9 de mai. - 12 de mai.</p>
        <h1>Acomodações em Florianópolis</h1>
        <div>
          <button>Flexibilidade de cancelamento</button>
          <button>Tipo de lugar</button>
          <button>Preço</button>
          <button>Reserva instantânea</button>
          <button>Mais filtros</button>
        </div>
        <div>
          <img src={alarmImg} alt="alarm gif" />
          <p>
            <strong>
              Verifique as restrições de viagem antes de fazer uma reserva
            </strong>
            . A saúde e a segurança das nossas comunidades vêm sempre em
            primeiro lugar. Siga as orientações do governo e viaje apenas se for
            essencial.{' '}
            <a href="https://www.airbnb.com.br/help/topic/1418/government-travel-restrictions-and-advisories">
              Saiba mais
            </a>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Filter;
