import React, { useState } from 'react';
import player from '../../playersData/players.js';
import Playerdisplay from '../Playerdisplay/Playerdisplay.js';


import './PlayerDetails.css';

const PlayerDetails = () => {
    const [players, setplayers] = useState(player);
    return (
        <div class='row'>
            <div class='col-md-9 text-white shadow list-style'>
                {
                    players.map(player=><Playerdisplay playerdisplay={player}></Playerdisplay>)
                }
            </div>
            <div class='col-md-3'>
                    <h1>Football Team</h1>
            </div>
        </div>
    );
};

export default PlayerDetails;