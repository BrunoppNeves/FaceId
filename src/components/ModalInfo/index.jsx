import React from "react";
import { Slide } from "react-slideshow-image";

import {
  ModalInfoContainer,
  BackgroundContainer,
  WorkspaceContainer,
  TopModalContainer,
  DivLeftContainer,
  DivCenterContainer,
  DivRightContainer,
  DivFotoContainer,
  DivHistoricoContainer,
  DivListContainer,
  DivDadosContainer,
} from "./style";

import botaoFechar from "../../assets/images/closeTab.svg";

export default function ModalInfo({
  title,
  onClick,
  nome,
  matricula,
  time,
  vinculo,
  alocacao,
  email,
  gitlab,
  aniversario,
  telefone,
  escolaridade,
  curso,
  competencia,
  admissao,
  historicos,
  fotos,
  id,
}) {
  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
    margin: "0.5rem",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 13.5C0 20.9558 6.04416 27 13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5Z"
            fill="black"
            fill-opacity="0.3"
          />
          <g filter="url(#filter0_d_141_16)">
            <path
              d="M16.0184 22.426L8.25346 14.5456C8.16129 14.4518 8.09616 14.3501 8.05806 14.2407C8.01935 14.1312 8 14.014 8 13.8889C8 13.7638 8.01935 13.6465 8.05806 13.5371C8.09616 13.4276 8.16129 13.326 8.25346 13.2322L16.0184 5.32835C16.2335 5.10945 16.5023 5 16.8249 5C17.1475 5 17.424 5.11727 17.6544 5.3518C17.8848 5.58634 18 5.85996 18 6.17268C18 6.48539 17.8848 6.75901 17.6544 6.99355L10.8802 13.8889L17.6544 20.7842C17.8694 21.0031 17.977 21.2727 17.977 21.5929C17.977 21.9137 17.8618 22.1914 17.6313 22.426C17.4009 22.6605 17.1321 22.7778 16.8249 22.7778C16.5177 22.7778 16.2488 22.6605 16.0184 22.426Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_141_16"
              x="4"
              y="5"
              width="18"
              height="25.7778"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_141_16" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_141_16" result="shape" />
            </filter>
          </defs>
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27 13.5C27 20.9558 20.9558 27 13.5 27C6.04416 27 0 20.9558 0 13.5C0 6.04416 6.04416 0 13.5 0C20.9558 0 27 6.04416 27 13.5Z"
            fill="black"
            fill-opacity="0.3"
          />
          <g filter="url(#filter0_d_141_16)">
            <path
              d="M10.9816 22.426L18.7465 14.5456C18.8387 14.4518 18.9038 14.3501 18.9419 14.2407C18.9806 14.1312 19 14.014 19 13.8889C19 13.7638 18.9806 13.6465 18.9419 13.5371C18.9038 13.4276 18.8387 13.326 18.7465 13.2322L10.9816 5.32835C10.7665 5.10945 10.4977 5 10.1751 5C9.85253 5 9.57604 5.11727 9.34562 5.3518C9.11521 5.58634 9 5.85996 9 6.17268C9 6.48539 9.11521 6.75901 9.34562 6.99355L16.1198 13.8889L9.34562 20.7842C9.13057 21.0031 9.02304 21.2727 9.02304 21.5929C9.02304 21.9137 9.13825 22.1914 9.36866 22.426C9.59908 22.6605 9.8679 22.7778 10.1751 22.7778C10.4823 22.7778 10.7512 22.6605 10.9816 22.426Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_141_16"
              x="5"
              y="5"
              width="18"
              height="25.7778"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_141_16" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_141_16" result="shape" />
            </filter>
          </defs>
        </svg>
      </button>
    ),
  };

  return (
    <BackgroundContainer>
      <ModalInfoContainer>
        <TopModalContainer>
          <h2>{title}</h2>
          <button onClick={onClick}>{<img src={botaoFechar} alt="icon" />}</button>
        </TopModalContainer>
        <WorkspaceContainer>
          <DivLeftContainer>
            <h1>Nome: {nome}</h1>
            <h1>Matricula: {matricula} </h1>
            <h1>Time: {time}</h1>
            <h1>Vínculo: {vinculo} </h1>
            <h1>Alocação: {alocacao}</h1>
            <h1>Email: {email}</h1>
            <h1>Gitlab: {gitlab}</h1>
          </DivLeftContainer>
          <DivCenterContainer>
            <h1>Aniversario: {aniversario} </h1>
            <h1>Telefone: {telefone} </h1>
            <h1>Escolaridade: {escolaridade} </h1>
            <h1>Curso: {curso} </h1>
            <h1>Competencia: {competencia} </h1>
            <h1>Admissao: {admissao} </h1>
          </DivCenterContainer>
          <DivRightContainer>
            <DivHistoricoContainer>
              <h2>Historico</h2>
              <DivListContainer>
                {historicos.map((historico) => {
                  return (
                    <DivDadosContainer>
                      <h3>{historico.date}</h3>
                    </DivDadosContainer>
                  );
                })}
              </DivListContainer>
            </DivHistoricoContainer>
            <DivFotoContainer>
              <Slide {...properties}>
                {fotos.map((foto, key) => {
                  return (
                    <div>
                      <img src={require(`../../assets/Persons/${id}/${foto}`)} alt="icon" />
                    </div>
                  );
                })}
              </Slide>
            </DivFotoContainer>
          </DivRightContainer>
        </WorkspaceContainer>
      </ModalInfoContainer>
    </BackgroundContainer>
  );
}
