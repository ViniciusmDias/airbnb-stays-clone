import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Bedroom = styled.a`
  display: flex;
  margin-bottom: 4vh;
  padding-bottom: 4vh;
  border-bottom: 1px solid #e0e0e0;

  section {
    button {
      border: 1px solid rgba(0, 0, 0, 0.08) !important;
      background-color: rgba(255, 255, 255, 0.9) !important;
      cursor: pointer !important;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 50px;
      background-color: gray;
      box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.18) 0px 2px 4px;
      transition: box-shadow 0.2s ease 0s, -ms-transform 0.25s ease 0s,
        transform 0.25s ease 0s, transform 0.25s ease 0s;
      width: 32px;
      margin: 0.5vw;

      &:hover {
        border-color: rgba(0, 0, 0, 0.08);
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px,
          rgba(0, 0, 0, 0.12) 0px 6px 16px;
        transform: scale(1.04);
      }
    }
    img {
      width: 300px;
      height: 200px;
      border-radius: 4px;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1vw;
    flex: 1;

    header {
      display: flex;
      align-items: center;

      button {
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 1px solid rgb(34, 34, 34);
        color: rgb(34, 34, 34);
        display: inline-block;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        padding: 1px 5px;
        font-size: 12px;
        line-height: 16px;
      }
      h4 {
        flex: 1;
        font-weight: 400;
        margin-left: 1vw;
      }
      p {
        display: flex;
        font-weight: 400;
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      flex: 1;

      justify-content: flex-start;
      h2 {
        margin: 2vh 0;
        font-weight: 600;
        color: rgb(34, 34, 34);
        line-height: 24px;
      }
      h4 {
        font-weight: 400;
        color: rgb(34, 34, 34);
        margin: 0.5vh 0;
      }
    }
    div {
      display: flex;
      justify-content: space-between;

      button {
        background-color: #f7f7f7;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        font-size: 0.8rem;
        color: #222222;
        padding: 0 1vw;
      }
      .price {
        display: flex;
        flex-direction: column;

        h4 {
          font-weight: 400;
          text-align: right;
        }
        svg {
          font-weight: 400;
        }
      }
    }
  }
`;
