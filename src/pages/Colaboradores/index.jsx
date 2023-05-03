import React from "react";
import Header from "../../components/Header";
import { WorkSpaceContainer, ColaboradoresContainer, DivBottomContainer } from "./style";
import ListaColaboradores from "../../components/ListaColaboradores";

export default function Colaboradores() {
  return (
    <ColaboradoresContainer>
      <WorkSpaceContainer>
        <Header />
        <DivBottomContainer>
          <ListaColaboradores />
        </DivBottomContainer>
      </WorkSpaceContainer>
    </ColaboradoresContainer>
  );
}
