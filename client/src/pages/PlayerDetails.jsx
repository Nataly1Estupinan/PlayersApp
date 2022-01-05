import React, { useEffect, useState } from "react";

import styles from "./PlayerDetails.module.css";

export function PlayerDetails() {

  const url = "http://localhost:3000/api/v1/players";
  const [player, setPlayer] = useState();


  const fetchApi = async () => {
    
    const response = await fetch(url);

    const responseJSON = await response.json();
    setPlayer(responseJSON);
  };

  useEffect(() => {
          fetchApi();
  }, []);

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.playerImage}`}
        src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="Jugador"
      />
      <div className={styles.col}>
        <p>Jugador:</p>
      </div>
    </div>
  );
}
