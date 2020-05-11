import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 114px 0 6vh;

  @media (min-width: 760px) {
    padding: 80px 0 6vh;
  }

  p {
    padding-top: 8vh;
    margin-bottom: 2vh;
  }
  h1 {
    margin-bottom: 4vh;
    letter-spacing: -1px;
  }

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    button {
      border: 1px solid rgb(176, 176, 176);
      background-color: rgb(255, 255, 255);
      border-radius: 30px;
      color: rgb(34, 34, 34) !important;
      padding: 8px 12px;
      font-size: 13px;
      line-height: 16px;
      margin-bottom: 4vh;

      &:hover {
        border-color: rgb(34, 34, 34);
      }
    }
    button + button {
      margin-left: 1vw;
    }

    img {
      width: 40px;
      height: 40px;
    }

    p {
      padding: 0;
      margin: 0 0 0 1vw;
    }
    a {
      text-decoration: underline;
    }
  }
`;
