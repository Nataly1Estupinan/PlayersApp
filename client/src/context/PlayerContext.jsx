import {  createContext, useEffect, useState } from "react";
import React from 'react'


const PlayerContext = createContext();

export function PlayerProvider  ({ children })  {
  const url = 'http://localhost:3000/api/v1/players';
  const [player, setPlayer] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);

    const responseJSON = await response.json();
    setPlayer(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const data = {player};
  return (
    <PlayerContext.Provider value={data}>{children}</PlayerContext.Provider>
  );
};

export default PlayerContext
