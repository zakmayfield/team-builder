import React, { useState } from 'react';

import TeamForm from './components/TeamForm';
import TeamMembers from './components/TeamMembers';

import './App.css';

function App() {

  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Fox Mulder',
      badgeNumber: 'JTTO 047101111',
      roles: [
                'FBI special agent', 
                'Assigned Agent on the X-Files', 
                'Behavioral Science Unit',
                'Violent Crimes Unit'
              ]
    }
  ]);

  const addNewTeamMember = teamInfo => {
    const newTeamMember = {
      id: Date.now(),
      name: teamInfo.name,
      badgeNumber: teamInfo.badgeNumber
    }
    setTeam([...team, newTeamMember])
  }

  return (
    <div className="App">
      <TeamForm addNewTeamMember={addNewTeamMember} />
      <hr />
      <TeamMembers team={team} />
    </div>
  );
}

export default App;
