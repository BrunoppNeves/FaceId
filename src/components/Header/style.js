import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-top: 3%;
  .headerLeft {
    display: flex;
  }

  img {
    width: 5rem;
    padding: 0 2%;
  }

  .usuario {
    width: 10rem;
    color: white;
    padding: 8% 0% 0% 0%;
  }

  .logout {
    color: rgba(255, 0, 0, 0.7);
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    width: 3.2rem;
    :hover {
      color: rgba(255, 0, 0, 1);
    }
  }

  .navegacao {
    margin-top: -2%;
    margin-right: 0.5%;
  }
  a:hover {
    color: #6f4be0;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin-left: 20px;
  }
`;
