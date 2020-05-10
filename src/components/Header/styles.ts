import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 2vw;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  img {
    width: 102px;
  }

  div {
    display: flex;
    align-items: center;

    button {
      padding: 12px 18px;
      border-radius: 22px;
      background-color: #fff;
      border: 0;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: rgb(247, 247, 247) none repeat scroll 0% 0%;
      }
    }
    a {
      border-radius: 22px;
      padding: 12px 18px;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: rgb(247, 247, 247) none repeat scroll 0% 0%;
      }
    }
    a + a {
      margin-left: 2vh;
      border: 1px solid rgb(235, 235, 235) !important;
      box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 2px;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: initial;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px;
      }
    }
  }
`;
export const Form = styled.form`
  display: flex;
  transition: box-shadow 0.2s ease 0s;
  border: 1px solid rgb(247, 247, 247);
  border-radius: 12px !important;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 2px;
  height: 48px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px;
  }

  input {
    width: 165px;
    padding: 0 16px;
    border: 0px none;
    cursor: pointer;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 8px 0 0 8px;
    border-right: 1px solid rgb(235, 235, 235);
  }
  input#insert {
    width: 220px;
    font-weight: 400;
  }
  button {
    padding: 0px 19px;
    margin: 0;
    border: 0;
    background: #fff;
    border-radius: 0 8px 8px 0;
  }
`;
