import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { BotaoDashboardContainer } from "./style";

export default function BotaoDashboard({ title, showIcon, icon, router, msg }) {
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   handleClick();
  // }, []);

  async function handleClick(rota, msg) {
    await api
      .get(rota, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          alert(`${msg}`);
        } else {
          alert(`Algo deu errado, tente novamente`);
        }
      })
      .catch((err) => {
        console.error("erro" + err);
        alert(`Algo deu errado, tente novamente`);
      });
  }

  return (
    <>
      <BotaoDashboardContainer>
        <button onClick={() => handleClick(router, msg)}>
          {title}
          {showIcon ? <img src={icon} alt="icon" /> : null}
        </button>
      </BotaoDashboardContainer>
    </>
  );
}
