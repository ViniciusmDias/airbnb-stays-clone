import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const Filter = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Bedroom = styled.div`
  display: flex;

  img {
    width: 300px;
    height: 200px;
  }

  aside {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
    }
  }
`;
