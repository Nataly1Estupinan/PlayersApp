import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../utils/httpClient";

import { Card } from "./Card";

import styles from "./Players.module.css";

function useQuery(){
    return new URLSearchParams(useLocation().search)
}


function Players() {
  const url = "http://localhost:3000/api/v1/players";
  const [player, setPlayer] = useState();

 const query = useQuery()
 const search = query.get("search")

  const fetchApi = async () => {
    
    const response = await fetch(url);

    const responseJSON = await response.json();
    setPlayer(responseJSON);
  };
  useEffect(() => {
      
    
    const searchUrl = search ? "/search/player?query=" + search :
    "/api/v1/players"
    get(searchUrl).then((data) => {
        setPlayer(data.items)

    })
    fetchApi();
  }, [search]);
  return (
    <div>
        
      <ul className={styles.playersGrid}>
        {!player
          ? "Cargando jugadores..."
          : player.map((player, index) => {
              return <Card key={player.id} player={player} />;
            })}
      </ul>
    </div>
  );
}

export default Players;
