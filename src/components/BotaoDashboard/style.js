import styled from "styled-components";

export const BotaoDashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    background-color: #6f4be0;
    border-radius: 8px;
    height: 4rem;
    width: 10rem;
    color: white;
    font-weight: 600;
    border: none;
  }

  button:hover {
    background-color: #5e3dc2;
  }
`;
