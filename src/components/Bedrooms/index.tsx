import React, { useState, useEffect } from 'react';

import { Container, Items, Bedroom } from './styles';
import { MdStar } from 'react-icons/md';
import { GiCutDiamond } from 'react-icons/gi';
import { FaQuestion } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import Filter from '../Filter';
import api from '../../services/api';

/* interface BedroomsData {
  photo: string;
  name: string;
  price: number;
}*/

const bedrooms = [
  {
    photo:
      'https://a0.muscache.com/im/pictures/48ae5ca7-7341-486f-beb5-51487db1f582.jpg?aki_policy=x_large',
    name: 'Bangalô Homeoffice C/ Saída Exclusiva Para a Praia',
    price: 100,
  },
  {
    photo:
      'https://a0.muscache.com/im/pictures/48ae5ca7-7341-486f-beb5-51487db1f582.jpg?aki_policy=x_large',
    name: 'Bangalô Homeoffice C/ Saída Exclusiva Para a Praia',
    price: 100,
  },
  {
    photo:
      'https://a0.muscache.com/im/pictures/48ae5ca7-7341-486f-beb5-51487db1f582.jpg?aki_policy=x_large',
    name: 'Bangalô Homeoffice C/ Saída Exclusiva Para a Praia',
    price: 100,
  },
  {
    photo:
      'https://a0.muscache.com/im/pictures/48ae5ca7-7341-486f-beb5-51487db1f582.jpg?aki_policy=x_large',
    name: 'Bangalô Homeoffice C/ Saída Exclusiva Para a Praia',
    price: 100,
  },
  {
    photo:
      'https://a0.muscache.com/im/pictures/48ae5ca7-7341-486f-beb5-51487db1f582.jpg?aki_policy=x_large',
    name: 'Bangalô Homeoffice C/ Saída Exclusiva Para a Praia',
    price: 100,
  },
  {
    photo:
      'https://a0.muscache.com/im/pictures/48ae5ca7-7341-486f-beb5-51487db1f582.jpg?aki_policy=x_large',
    name: 'Bangalô Homeoffice C/ Saída Exclusiva Para a Praia',
    price: 100,
  },
];

const Bedrooms: React.FC = () => {
  /*const [bedrooms, setBedrooms] = useState<BedroomsData[]>([]);

  useEffect(() => {
    api.get(``).then((response) => {
      setBedrooms(response.data);
      console.log(response.data);
    });
  }, []);*/

  return (
    <>
      <Container>
        <Filter />

        <Items>
          {bedrooms.map((bedroom) => (
            <Bedroom
              key={bedroom.photo}
              href="https://www.airbnb.com.br/s/Florian%C3%B3polis-~-SC/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=unknown&ne_lat=-27.250811076222202&ne_lng=-48.12543934082032&sw_lat=-27.786691285719126&sw_lng=-48.684368784179696&zoom=10&search_by_map=true&query=Santa%20Catarina%20Island%2C%20Brasil&checkin=2020-05-10&checkout=2020-05-15"
            >
              <section>
                <button>
                  <FiHeart size={14} />
                </button>
                <img src={bedroom.photo} alt="bedroom" />
              </section>
              <aside>
                <header>
                  <button>SuperHost</button>
                  <h4>Apartamento inteiro</h4>
                  <p>
                    <MdStar size={16} color={'#ff385c'} /> 4.89{' '}
                    <span>(70)</span>
                  </p>
                </header>
                <div className="description">
                  <h2>Vista para o mar e perto de tudo!</h2>
                  <h4>4 hóspedes . Estúdio . 2 camas . 1 Banheiro</h4>
                  <h4>Wifi . Ar-condicionado . Cozinha</h4>
                </div>
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
