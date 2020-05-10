import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { GiWorld } from 'react-icons/gi';
import logo from '../../assets/airbnb-logo.png';
import { Container, Form } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <a href="https://viniciusdias.works">
          <img src={logo} alt="logo airbnb" />
        </a>
        <Form>
          <input defaultValue="Florianópolis, Brasil" />
          <input defaultValue="9 de mai. - 12 de mai." />
          <input id="insert" placeholder="Insira o número de hóspedes" />
          <a href="https://www.airbnb.com.br/s/Florian%C3%B3polis-~-SC/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=unknown&ne_lat=-27.250811076222202&ne_lng=-48.12543934082032&sw_lat=-27.786691285719126&sw_lng=-48.684368784179696&zoom=10&search_by_map=true&query=Santa%20Catarina%20Island%2C%20Brasil&checkin=2020-05-10&checkout=2020-05-15">
            <FiSearch size={20} color={'#FF385C'} />
          </a>
        </Form>
        <div>
          <a
            href="https://www.airbnb.com.br/s/Florian%C3%B3polis-~-SC/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=unknown&ne_lat=-27.250811076222202&ne_lng=-48.12543934082032&sw_lat=-27.786691285719126&sw_lng=-48.684368784179696&zoom=10&search_by_map=true&query=Santa%20Catarina%20Island%2C%20Brasil&checkin=2020-05-10&checkout=2020-05-15"
            className="world"
          >
            <GiWorld size={20} />
          </a>
          <a href="https://www.airbnb.com.br/s/Florian%C3%B3polis-~-SC/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=unknown&ne_lat=-27.250811076222202&ne_lng=-48.12543934082032&sw_lat=-27.786691285719126&sw_lng=-48.684368784179696&zoom=10&search_by_map=true&query=Santa%20Catarina%20Island%2C%20Brasil&checkin=2020-05-10&checkout=2020-05-15">
            Ajuda
          </a>
          <a href="https://www.airbnb.com.br/s/Florian%C3%B3polis-~-SC/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=unknown&ne_lat=-27.250811076222202&ne_lng=-48.12543934082032&sw_lat=-27.786691285719126&sw_lng=-48.684368784179696&zoom=10&search_by_map=true&query=Santa%20Catarina%20Island%2C%20Brasil&checkin=2020-05-10&checkout=2020-05-15">
            Cadastrar-se
          </a>
        </div>
      </Container>
    </>
  );
};

export default Header;
