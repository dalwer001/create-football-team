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
    //  const salary= addplayer.salary;
 
    return (
        <div>
             <h1 className='football-team'>Football Club</h1>
             <h5>Total player Added: {addplayer.length}</h5>
             <h6>Total Cost: ${totalCost}</h6>
             <h5>PlayerList:</h5>
             <p>{playerName}</p>
                
        </div>
    );
};

export default CreateTeam;