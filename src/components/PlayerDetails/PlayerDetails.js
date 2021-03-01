import React, { useState } from 'react';
import player from '../../playersData/players.js';
import CreateTeam from '../CreatTeam/CreateTeam.js';
import Playerdisplay from '../Playerdisplay/Playerdisplay.js';


import './PlayerDetails.css';

const PlayerDetails = () => {
    const [players, setplayers] = useState(player);
    const [addplayer,setAddPlayer] = useState([]);
    const handleAddPlayer =(player) =>{
        const newPlayer =[...addplayer, player];
        setAddPlayer(newPlayer);
    }
    return (
        <div className='row'>
            <div className='col-md-9 text-white shadow list-style'>
                {
                    players.map(player=><Playerdisplay player={player} handleAddPlayer={handleAddPlayer} key={player.identifier}></Playerdisplay>)
                }
            </div>
            <div className='col-md-3 bg-info team-details'>
            <CreateTeam addplayer={addplayer}></CreateTeam>
            <br/>
            </div>
        </div>
    );
};

export default PlayerDetails;