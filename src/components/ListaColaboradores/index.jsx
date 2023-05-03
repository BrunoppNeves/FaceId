import React, { useEffect, useState } from "react";
import { DivListaUserContainer, DivCentralContainer, DivButtonsContainer } from "./style";
import api from "../../services/api";
import BotaoColaboradores from "../BotaoColaboradores";
import botaoEditar from "../../assets/images/IconeEditar.png";
import lixeira from "../../assets/images/Lixeira.svg";
import info from "../../assets/images/info.png";
import adicionar from "../../assets/images/AdicionarUsuario.svg";
import ModalInfo from "../ModalInfo";
import ModalAddColaborador from "../ModalAddColaborador";
import ModalEditarColaborador from "../ModalEditarColaborador";

export default function ListaColaboradores() {
  const token = localStorage.getItem("token");

  const [pessoas, setPessoas] = useState();
  const [Pessoa, setPessoa] = useState();
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  function logged() {
    if (!token) {
      window.location.href = "/Login";
    }
  }

  async function handleSetShowModalInfo(id) {
    if (showModalInfo === false) await getPeople(id);
    setShowModalInfo(!showModalInfo);
  }

  async function handleSetShowModalAdd() {
    //if (showModalAdd === false) await getPeople();
    setShowModalAdd(!showModalAdd);
  }

  async function handleSetShowModalEdit(id) {
    if (showModalEdit === false) await getPeople(id);
    setShowModalEdit(!showModalEdit);
  }

  async function getPeople(id) {
    await api
      .get(`/users/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPessoa(response.data);
        console.log(response.data.fotos[0]);
      })
      .catch((err) => {
        console.error("erro" + err);
      });
  }

  async function handlePessoasApi() {
    await api
      .get("/users/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPessoas(response.data);
      })
      .catch((err) => {
        console.error("erro" + err);
      });
  }

  async function handleDelete(id) {
    await api
      .delete(`/users/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(id);
        console.log(response.data);
        if (response.status === 200) {
          console.log("sucesso");
          alert(`deletado com sucesso`);
        }
      });

    handlePessoasApi().catch((err) => {
      console.error("erro" + err);
    });
  }

  useEffect(() => {
    logged(); 
    handlePessoasApi();
  }, []);

  return (
    <>
      {!pessoas ? (
        <>
          <h1>...</h1>
        </>
      ) : (
        <>
          <DivCentralContainer>
            <DivListaUserContainer>
              <h1>Nome</h1>
              <h1>Email</h1>
              <h1>Matrícula</h1>
              <h1>Time</h1>
              <h1>Aniversario</h1>
              <h1>Competencia</h1>
              <h1>Vinculo</h1>
              <BotaoColaboradores icon={adicionar} onClick={handleSetShowModalAdd} />
              {showModalAdd && (
                <ModalAddColaborador
                  Cancelar={handleSetShowModalAdd}
                  Confirmar={handleSetShowModalAdd}
                  CloseTab={handleSetShowModalAdd}
                />
              )}
            </DivListaUserContainer>
            {pessoas.map((pessoa, key) => {
              return (
                <DivListaUserContainer>
                  <h1>{pessoa.name}</h1>
                  <h1>{pessoa.email}</h1>
                  <h1>{pessoa.matricula}</h1>
                  <h1>{pessoa.time}</h1>
                  <h1>{pessoa.aniversario}</h1>
                  <h1>{pessoa.competencia}</h1>
                  <h1>{pessoa.vinculo}</h1>
                  <DivButtonsContainer>
                    <BotaoColaboradores
                      icon={info}
                      onClick={() => handleSetShowModalInfo(pessoa.id)}
                      Cancelar={handleSetShowModalAdd}
                    />
                    {showModalInfo && (
                      <ModalInfo
                        title="Informações do Colaborador"
                        onClick={handleSetShowModalInfo}
                        nome={Pessoa.user.name}
                        matricula={Pessoa.user.matricula}
                        time={Pessoa.user.time}
                        aniversario={Pessoa.user.aniversario}
                        competencia={Pessoa.user.competencia}
                        vinculo={Pessoa.user.vinculo}
                        telefone={Pessoa.user.telefone}
                        email={Pessoa.user.email}
                        gitlab={Pessoa.user.gitlab}
                        alocacao={Pessoa.user.alocacao}
                        admissao={Pessoa.user.admissao}
                        escolaridade={Pessoa.user.escolaridade}
                        status={Pessoa.user.status}
                        historicos={Pessoa.user.histories}
                        id={Pessoa.user.id}
                        fotos={Pessoa.fotos}
                      />
                    )}
                    <BotaoColaboradores icon={botaoEditar} onClick={() => handleSetShowModalEdit(pessoa.id)} />
                    {showModalEdit && (
                      <ModalEditarColaborador
                        id={pessoa.id}
                        Cancelar={handleSetShowModalEdit}
                        getNome={Pessoa.user.name}
                        getMatricula={Pessoa.user.matricula}
                        getTime={Pessoa.user.time}
                        getAniversario={Pessoa.user.aniversario}
                        getCompetencia={Pessoa.user.competencia}
                        getVinculo={Pessoa.user.vinculo}
                        getTelefone={Pessoa.user.telefone}
                        getEmail={Pessoa.user.email}
                        getGitlab={Pessoa.user.gitlab}
                        getAlocacao={Pessoa.user.alocacao}
                        getAdmissao={Pessoa.user.admissao}
                        getEscolaridade={Pessoa.user.escolaridade}
                        getStatus={Pessoa.user.status}
                        getCompetencias={Pessoa.user.competencia}
                      />
                    )}
                    <BotaoColaboradores icon={lixeira} onClick={() => handleDelete(pessoa.id)} />
                  </DivButtonsContainer>
                </DivListaUserContainer>
              );
            })}
          </DivCentralContainer>
        </>
      )}
    </>
  );
}
