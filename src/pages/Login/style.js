import styled from "styled-components";
import background from "../../assets/images/BackgroundLogin.svg";

export const BackgroundContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const WorkspaceContainer = styled.div`
  display: flex;
  width: 40vw;
  height: 100vh;
  justify-content: start;
  /* background-color: black; */
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  padding: 6rem 2rem 2rem 2rem;
`;

export const FundoLoginContainer = styled.div`
  background-size: cover;
  width: 28rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(111, 75, 239, 0.4);
  border-radius: 1rem;
  flex-direction: column;

  h2 {
    color: white;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 23rem;
  height: 3rem;
  background-color: #9747ff;
  border-radius: 5px;
  margin-top: 2rem;
  justify-content: space-between;
  border: white 1px solid;

  input {
    width: 90%;
    border: none;
    background-color: transparent;
    ::placeholder {
      color: #ffffff80;
    }
    outline: none;
    color: white;
  }

  img {
    width: 10%;
    margin: 0.4rem;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;

  button {
    width: 10rem;
    height: 2rem;
    margin: 2rem;
    background-color: #9747ff;
    border-radius: 5px;
    border: solid 1px white;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    :hover{
        background-color: #9747ff80;
    }
  }
`;
