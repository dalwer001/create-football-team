import React from 'react';
import "./CreateTeam.css"

const CreateTeam = (props) => {
    const addplayer = props.addplayer;

    const totalCost =addplayer.reduce((total,playerCost)=>total+playerCost.salary,0);

    let playerName =[]; 
    for(let i=0;i<addplayer.length;i++){
    const player = addplayer[i];
    let name  =' '+player.first_name+' '+player.last_name+ ' ($'+player.salary+')' + ' || ';
    playerName.push(name);
    }

    return (
        <div>
            <h1 className='football-team'>Football Club</h1>
            <h5 className='text-primary'>Total player Added: {addplayer.length}</h5>
            <h5 className='text-info'>Total Cost: ${totalCost}</h5>
            <h5 className='text-danger'><u>PlayerList:</u></h5>
            <p className=' player-list'>{playerName}</p>
                
        </div>
    );
};

export default CreateTeam;