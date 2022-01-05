import styles from "./Card.module.css";
import React  from 'react';
import { Link } from "react-router-dom";


export function Card({player}){
    
    return  (
    <li className={styles.playerCard}>
    
    <Link to={"/players/" + player._id}  >
    <img 
    width={230}
    height={345}
    className={styles.playerImage}
    src='https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60' 
    alt={player.firstName}/>
    
    
    <div className="card-body">
        <h5 className="card-title">{player.firstName}</h5>
        <hr/>
        <p>Position: {player.position}</p>
        <p>Club: {player.club}</p>
    </div>
    </Link>
    </li>
    )
}