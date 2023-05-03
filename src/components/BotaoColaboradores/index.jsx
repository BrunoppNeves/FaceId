import React from "react";
import { BotaoColaboradoresContainer } from "./style";
import api from "../../services/api";

export default function BotaoColaborador({ icon, onClick, router }) {
  async function handleClick() {
    await api
      .delete(router)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          console.log("sucesso");
          alert(`deletado com sucesso`);
        }
      })
      .catch((err) => {
        console.error("erro" + err);
      });
  }

  return (
    <>
      <BotaoColaboradoresContainer>
        <button onClick={onClick}>{<img src={icon} alt="icon" />}</button>
      </BotaoColaboradoresContainer>
    </>
  );
}
