import styled from "styled-components";

export const DivBackgroundContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0 0 0 / 60%);
`;

export const DivModalAddColaboradorContainer = styled.div`
  width: 60rem;
  height: 35rem;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1vh;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 10px;
  background-color: rgba(68, 36, 110);
`;

export const DivTopModalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h1 {
    display: flex;
    font-size: 18px;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: white;
    padding-left: 5rem;
  }

  button {
    display: flex;
    background-color: transparent;
    border: none;
    border-radius: 50%;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const DivMidContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 1rem;

  h2 {
    color: white;
  }
`;

export const DivInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 26rem;
  height: 3rem;
  margin: 0rem 0rem 1rem;
  padding: 0px 5px 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;

  h2 {
    margin: 0.1rem 0.2rem 0rem;
  }

  input {
    border: none;
    border-radius: 3px;
    width: 98%;
    height: 100%;
    margin: 0.2rem 0.2rem 0.2rem;
    background-color: rgba(255, 255, 255, 0.9);
    outline: none;
    padding: 0.1rem 0.2rem 0rem;
  }
`;

export const DivLeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const DivRightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

export const DivButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 3rem;
    margin: 1rem 2rem 1rem;
    background-color: #9747ff80;
    border-radius: 5px;
    border: solid 1px white;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    :hover {
      background-color: #9747ff;
      transition: 0.30s ease-in-out;
    }
  }
`;
