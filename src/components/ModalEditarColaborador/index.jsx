import React, { useState } from "react";
import closeIcon from "../../assets/images/closeTab.svg";
import api from "../../services/api";
import ImageUpload from "../ImageUpload";

import {
  DivBackgroundContainer,
  DivModalAddColaboradorContainer,
  DivMidContainer,
  DivTopModalContainer,
  DivLeftContainer,
  DivRightContainer,
  DivButtonContainer,
  DivInputContainer,
} from "./style";

export default function ModalEditColaborador({
  Cancelar,
  Confirmar,
  getNome,
  getMatricula,
  getEscolaridade,
  getAniversario,
  getAdmissao,
  getCompetencia,
  getAlocacao,
  getTime,
  getVinculo,
  getEmail,
  getGitlab,
  getTelefone,
  id,
}) {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [admissao, setAdmissao] = useState("");
  const [competencia, setCompetencia] = useState("");
  const [alocacao, setAlocacao] = useState("");
  const [time, setTime] = useState("");
  const [vinculo, setVinculo] = useState("");
  const [email, setEmail] = useState("");
  const [gitlab, setGitlab] = useState("");
  const [telefone, setTelefone] = useState("");
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const token = localStorage.getItem("token");

  async function handleImageUpload(id) {
    const formData = new FormData();
    formData.append("foto1", images[0]);
    formData.append("foto2", images[1]);
    formData.append("foto3", images[2]);
    formData.append("foto4", images[3]);
    formData.append("foto5", images[4]);
    await api
      .post(`/images/upload/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("Colaborador cadastrado com sucesso!");
        window.location.href = "/Colaboradores";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleEditar = async (e) => {
    e.preventDefault();
    if (images.length > 0 && images.length !== 5) {
      alert("Por favor, selecione 5 fotos");
    } else {
      const newUser = {
        name: nome,
        matricula: matricula,
        escolaridade: escolaridade,
        aniversario: aniversario,
        admissao: admissao,
        competencia: competencia,
        alocacao: alocacao,
        time: time,
        vinculo: vinculo,
        email: email,
        gitlab: gitlab,
        telefone: telefone,
      };
      const user = {};
      if (nome !== "") user.name = nome;
      if (matricula !== "") user.matricula = matricula;
      if (escolaridade !== "") user.escolaridade = escolaridade;
      if (aniversario !== "") user.aniversario = aniversario;
      if (admissao !== "") user.admissao = admissao;
      if (competencia !== "") user.competencia = competencia;
      if (alocacao !== "") user.alocacao = alocacao;
      if (time !== "") user.time = time;
      if (vinculo !== "") user.vinculo = vinculo;
      if (email !== "") user.email = email;
      if (gitlab !== "") user.gitlab = gitlab;
      if (telefone !== "") user.telefone = telefone;
      user.img = images.length;
      await api
        .put(`/users/update/${id}`, user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          if (images.length > 0) {
            handleImageUpload(id);
          } else {
            alert("Colaborador editado com sucesso");
            window.location.href = "/Colaboradores";
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Erro ao editar colaborador, verifique os campos");
        });
    }
  };

  return (
    <DivBackgroundContainer>
      <form onSubmit={handleEditar}>
        <DivModalAddColaboradorContainer>
          <DivTopModalContainer>
            <h1>Editar Colaborador</h1>
            <button onClick={Cancelar}>{<img src={closeIcon} alt="icon" />}</button>
          </DivTopModalContainer>
          <DivMidContainer>
            <DivLeftContainer>
              <DivInputContainer>
                <h2>Nome</h2>
                {<input type="text" value={nome} placeholder={`${getNome}`} onChange={({ target }) => setNome(target.value)} />}
              </DivInputContainer>
              <DivInputContainer>
                <h2>Matrícula</h2>
                {
                  <input
                    type="text"
                    value={matricula}
                    placeholder={`${getMatricula}`}
                    onChange={({ target }) => setMatricula(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Escolaridade</h2>
                {
                  <input
                    type="text"
                    value={escolaridade}
                    placeholder={`${getEscolaridade}`}
                    onChange={({ target }) => setEscolaridade(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Aniversário (mês,dia,ano)</h2>
                {
                  <input
                    type="text"
                    value={aniversario}
                    placeholder={`${getAniversario}`}
                    onChange={({ target }) => setAniversario(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Admissão (mês-dia-ano)</h2>
                {
                  <input
                    type="text"
                    value={admissao}
                    placeholder={`${getAdmissao}`}
                    onChange={({ target }) => setAdmissao(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Competência</h2>
                {
                  <input
                    type="text"
                    value={competencia}
                    placeholder={`${getCompetencia}`}
                    onChange={({ target }) => setCompetencia(target.value)}
                  />
                }
              </DivInputContainer>
            </DivLeftContainer>
            <DivRightContainer>
              <DivInputContainer>
                <h2>Alocação</h2>
                {
                  <input
                    type="text"
                    value={alocacao}
                    placeholder={`${getAlocacao}`}
                    onChange={({ target }) => setAlocacao(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Time</h2>
                {<input type="text" value={time} placeholder={`${getTime}`} onChange={({ target }) => setTime(target.value)} />}
              </DivInputContainer>
              <DivInputContainer>
                <h2>Vínculo</h2>
                {
                  <input
                    type="text"
                    value={vinculo}
                    placeholder={`${getVinculo}`}
                    onChange={({ target }) => setVinculo(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Email</h2>
                {
                  <input
                    type="text"
                    value={email}
                    placeholder={`${getEmail}`}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Gitlab</h2>
                {
                  <input
                    type="text"
                    value={gitlab}
                    placeholder={`${getGitlab}`}
                    onChange={({ target }) => setGitlab(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Telefone</h2>
                {
                  <input
                    type="text"
                    value={telefone}
                    placeholder={`${getTelefone}`}
                    onChange={({ target }) => setTelefone(target.value)}
                  />
                }
              </DivInputContainer>
            </DivRightContainer>
          </DivMidContainer>
          <DivButtonContainer>
            <ImageUpload images={images} setImages={setImages} imageURLs={imageURLs} setImageURLs={setImageURLs} />
            <button type="submit">Confirmar</button>
          </DivButtonContainer>
        </DivModalAddColaboradorContainer>
      </form>
    </DivBackgroundContainer>
  );
}
