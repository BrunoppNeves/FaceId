import styled from "styled-components";

export const ListaComponente = styled.div`
  width: 97%;
  display: flex;
  flex-direction: row;
  color: black;
  font-size: 10px;
  border-radius: 8px;
  background-color: white;
  margin-top: 2%;
  padding: 1% 0% 1%;
  h1 {
    margin-left: 3%;
  }
`;

export const FundoLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(111, 75, 239, 0.2);
  width: 42vw;
  height: 70vh;
  border-radius: 16px;
  margin: 2% 0 0 0.5%;
  padding-bottom: 0.8rem;
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

  h2 {
    color: white;
    font-size: 20px;
    margin-top: 1rem;
  }
`;
