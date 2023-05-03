import React from "react";
import Header from "../../components/Header";
import cadeadoFechado from "../../assets/images/cadeadoFechado.svg";
import cadeadoAberto from "../../assets/images/cadeadoAberto.svg";
import cadeadoTempo from "../../assets/images/cadeadoTempo.svg";
import BotaoDashboard from "../../components/BotaoDashboard";
import {
  DashboardContainer,
  WorkSpaceContainer,
  DivLeftContainer,
  DivRightContainer,
  DivBottomContainer,
  DivVideoContainer,
  DivButtonsContainer,
} from "./style";
import ListaDashboard from "../../components/ListaDashboard/";
import ReconhecimentoFacial from "../../components/ReconhecimentoFacial/index";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <WorkSpaceContainer>
        <Header />
        <DivBottomContainer>
          <DivLeftContainer>
            <ListaDashboard />
          </DivLeftContainer>
          <DivRightContainer>
            <DivVideoContainer>
              <ReconhecimentoFacial />
            </DivVideoContainer>
            <DivButtonsContainer>
              <BotaoDashboard title={"Abrir"} showIcon={true} icon={cadeadoAberto} router={"/mqtt/abre"} msg={"abriu"} />
              <BotaoDashboard
                title={"Abrir 3s"}
                showIcon={true}
                icon={cadeadoTempo}
                router={"/mqtt/abre3s"}
                msg={"abriu por 3s"}
              />
              <BotaoDashboard title={"Fechar"} showIcon={true} icon={cadeadoFechado} router={"/mqtt/fecha"} msg={"fechou"} />
            </DivButtonsContainer>
          </DivRightContainer>
        </DivBottomContainer>
      </WorkSpaceContainer>
    </DashboardContainer>
  );
}
