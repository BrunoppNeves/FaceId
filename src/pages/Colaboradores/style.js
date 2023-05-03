import styled from "styled-components";
import background from "../../assets/images/Background.svg";

export const ColaboradoresContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const WorkSpaceContainer = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
`;

export const DivBottomContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  width: 90vw;
  height: 100vh;
  margin-top: 2rem;
`;


