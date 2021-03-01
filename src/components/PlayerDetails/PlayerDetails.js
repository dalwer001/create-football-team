import React, { useState } from 'react';
import player from '../../playersData/players.js';
import Playerdisplay from '../Playerdisplay/Playerdisplay.js';


import './PlayerDetails.css';

const PlayerDetails = () => {
    const [players, setplayers] = useState(player);
    const [addplayer,setAddPlayer] = useState([]);
    const handleAddPlayer =(player) =>{
        console.log('player added',player);
        const newPlayer =[...addplayer, player];
        setAddPlayer(newPlayer);
    }
    return (
        <div class='row'>
            <div class='col-md-9 text-white shadow list-style'>
                {
                    players.map(player=><Playerdisplay player={player} handleAddPlayer={handleAddPlayer}></Playerdisplay>)
                }
            </div>
            <div class='col-md-3 p-5 bg-info team-details'>
                    <h1 class='football-team'>Football Team</h1>
                    <h5>Player Summery: {addplayer.length}</h5>
            </div>
        </div>
    );
};

export default PlayerDetails;