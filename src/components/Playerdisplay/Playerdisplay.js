import React from 'react';
import './Playerdisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare } from '@fortawesome/free-solid-svg-icons'
const Playerdisplay = (props) => {
    
    const {image,first_name,last_name,team,salary,position}=props.player;
    return (
        <div className="row m-5 shadow element">
            <div className="col-md-3">
                <img className="player-image w-100 p-2" src={image} alt=""/>
            </div>
            <div className="col-md-9 player-info shadow">
            <h1 className="text-dark ">Team: <span className="text-danger">{team}</span></h1>
            <hr/>
            <p className="fs-5">Player Name: {first_name} {last_name}</p>
            <p>Position: {position}</p>
            <p>Salary: ${salary}</p>
            {/* use fontawesome */}
            <button className="me-auto btn  btn-success pe-auto mb-3" onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlusSquare} /> Add Player</button>
            </div>
            
        </div>
    );
};

export default Playerdisplay;