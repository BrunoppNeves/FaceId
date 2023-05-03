import styled from "styled-components";

import { getColor } from "../Upload/index";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${(props) => getColor(props)};
  border-style: solid;
  background-color: rgba(255, 255, 255, 0.2);
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  margin-left: 28px;
  width: 25.6rem;
  height: 4rem;

  p {
    font-size: 14px;
    width: 100%;
    color: white;
    padding-left: 2px;
    font-weight: 600;
  }
`;

export const FotosContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5d3dc3;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    color: black;
    width: 100%;
    height: 100%;
    padding-left: 4px;
  }
`;
