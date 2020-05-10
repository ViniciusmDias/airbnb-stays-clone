import React from 'react';

import Header from '../../components/Header';
import Bedrooms from '../../components/Bedrooms';
import Map from '../../components/Map';

import { Section } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Section>
        <Bedrooms />
        <Map />
      </Section>
    </>
  );
};
export default Dashboard;
