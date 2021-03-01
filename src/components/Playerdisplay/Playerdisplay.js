import React from 'react';
import './Playerdisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare } from '@fortawesome/free-solid-svg-icons'
const Playerdisplay = (props) => {
    
    const {image,first_name,last_name,team,salary,position}=props.player;
    return (
        <div class="row m-5 shadow element">
            <div class="col-md-3">
                <img class="player-image w-100 p-2" src={image} alt=""/>
            </div>
            <div class="col-md-9 player-info shadow">
            <h1 class="text-dark ">Team: <span class="text-danger">{team}</span></h1>
            <hr/>
            <p class="fs-5">Player Name: {first_name} {last_name}</p>
            <p>Positions: {position}</p>
            <p>Salary: {salary}$</p>
            {/* use fontawesome */}
            <button class="me-auto btn  btn-success pe-auto" onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlusSquare} /> Add Player</button>
            </div>
            
        </div>
    );
};

export default Playerdisplay;