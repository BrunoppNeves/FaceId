import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ListaComponente, FundoLista } from "./style";

export default function ListaDashboard() {
  const token = localStorage.getItem("token");
  const [pessoas, setPessoas] = useState();

  function logged() {
    if (!token) {
      window.location.href = "/Login";
    }
  }

  async function handlePessoasApi() {
    await api
      .get("/history/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setPessoas(response.data);
      })
      .catch((err) => {
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
          <FundoLista>
            <h2>Histórico de chegada</h2>
            {pessoas.map((pessoa) => {
              return (
                <ListaComponente key={pessoa.id}>
                  <h1>{pessoa.User.name}</h1>
                  <h1>{pessoa.date}</h1>
                </ListaComponente>
              );
            })}
          </FundoLista>
        </>
      )}
    </>
  );
}
