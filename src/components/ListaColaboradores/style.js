import styled from "styled-components";

export const DivCentralContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: cer;
  flex-direction: column;
  width: 100vw;
  height: 70vh;
  background-color: black;
  border-radius: 10px;
  background-color: rgba(111, 75, 239, 0.2);
  padding: 0rem 1rem 1rem 1rem;
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

export const DivListaUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  border-radius: 5px;
  margin: 1rem 0rem 0rem;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 0.4rem 1.5rem;
  }
  button {
    display: flex;
    justify-content: center;
    border: unset;
    margin-right: 2em;
  }

  img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const DivButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7vw;
`;

export const DivNomeContainer = styled.div``;
export const DivEmailContainer = styled.div``;
export const DivMatriculaContainer = styled.div``;
export const DivAniversarioContainer = styled.div``;
export const DivCompetenciaContainer = styled.div``;
export const DivVinculoContainer = styled.div``;
