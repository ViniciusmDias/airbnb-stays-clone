import React from 'react';

import { Container } from './styles';

const Map: React.FC = () => {
  return (
    <Container>
      <iframe
        title="maps"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDFdELogR1CgZlqBoFowprTxxH7VNXbGPA&q=Florianopolis"
      ></iframe>
    </Container>
  );
};
export default Map;
