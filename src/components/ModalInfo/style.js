import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";

export const BackgroundContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0 0 0 / 20%);
  h1 {
    color: white;
    margin-top: 7%;
  }
`;

export const ModalInfoContainer = styled.div`
  width: 60rem;
  height: 35rem;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 2vh;
  padding: 2% 2%;
  font-size: 10px;
  background-color: rgba(68, 36, 110);
`;

export const WorkspaceContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const TopModalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  h2 {
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
    justify-content: center;
    background-color: transparent;
    align-items: center;
    border: none;
    border-radius: 100%;
    width: 1.5rem;
    height: 1.5rem;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const DivLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
`;

export const DivCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
`;

export const DivRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  justify-content: start;
`;

export const DivFotoContainer = styled.div`
  background-color: grey;
  width: 22.5rem;
  height: 15rem;
  border: 2px solid white;
  border-radius: 10px;
  margin-left: 0rem;
  div {
    width: 100%;
    height: 100%;
    
    img {
      display: flex;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`;

export const DivHistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
  width: 22.5rem;
  height: 16rem;
  align-items: center;
  justify-content: start;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 1.2rem;

  h2 {
    display: flex;
    color: white;
    margin: 0.4rem;
  }
`;

export const DivListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(68, 36, 110);
  border-top: 1px solid white;
  border-radius: 0px 0px 10px 10px;
  overflow: auto;
  scrollbar-color: dark;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #5d3dc3;
  }
`;

export const DivDadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 19rem;
  height: 20rem;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  margin: 0.3rem 0rem;
  padding: 0.5rem;

  h3 {
    color: white;
    font-size: 14px;
  }
`;
