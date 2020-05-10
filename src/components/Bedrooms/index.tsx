import React, { useState, useEffect } from 'react';

import alarm from '../../assets/alarm.gif';
import { Container, Filter, Items, Bedroom } from './styles';
import { MdStar } from 'react-icons/md';
import { GiCutDiamond } from 'react-icons/gi';
import { FaQuestion } from 'react-icons/fa';

import api from '../../services/api';

interface BedroomsData {
  photo: string;
  property_type: string;
  name: string;
  price: number;
}

const Bedrooms: React.FC = () => {
  const [bedrooms, setBedrooms] = useState<BedroomsData[]>([]);

  useEffect(() => {
    api.get(``).then((response) => {
      setBedrooms(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Filter>
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
            <img src={alarm} alt="alarm gif" />
            <p>
              <strong>
                Verifique as restrições de viagem antes de fazer uma reserva.
              </strong>
              A saúde e a segurança das nossas comunidades vêm sempre em
              primeiro lugar. Siga as orientações do governo e viaje apenas se
              for essencial.
              <a href="https://www.airbnb.com.br/help/topic/1418/government-travel-restrictions-and-advisories">
                Saiba mais
              </a>
            </p>
          </div>
        </Filter>

        <Items>
          {bedrooms.map((bedroom) => (
            <Bedroom>
              <img src={bedroom.photo} alt="bedroom" />
              <aside>
                <div>
                  <button>SuperHost</button>
                  <h4>Apartamento inteiro</h4>
                  <p>
                    <MdStar size={16} /> 4.89 <h4>(70)</h4>
                  </p>
                </div>
                <h2>Vista para o mar e perto de tudo!</h2>
                <h4>4 hóspedes . Estúdio . 2 camas . 1 Banheiro</h4>
                <h4>Wifi . Ar-condicionado . Cozinha</h4>
                <div>
                  <button>
                    <GiCutDiamond size={14} /> Raridade
                  </button>
                  <div className="price">
                    <h3>R${bedroom.price / 4}/noite</h3>
                    <h4>
                      Total de R$ {bedroom.price} <FaQuestion size={8} />
                    </h4>
                  </div>
                </div>
              </aside>
            </Bedroom>
          ))}
        </Items>
      </Container>
    </>
  );
};
export default Bedrooms;
