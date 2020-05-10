import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  max-width: 1354px;
  margin: 0 auto;
  padding: 0 2vw;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
