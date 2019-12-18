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
    },
    {
      id: 2,
      name: 'Dana Scully',
      badgeNumber: 'JTT 98850',
      roles: [
                'FBI special agent', 
                'Assigned Agent on the X-Files', 
                'Behavioral Science Unit',
                'Violent Crimes Unit'
              ]
    }
  ]);

  const [removePerson, setRemovePerson] = useState([]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      badgeNumber: teamMember.badgeNumber
    }
    console.log(teamMember)
    setTeam([...team, newTeamMember])
  }

  {/* What im attempting to do in this function is when connected to the delete button it shoudld be able to find the persons id and then based on that id it should remove that person from the team state
  -- logging team from this func gives an array of objects containing the team members, so somehow if we can filter through that array of objects and find the id we can then target that person */}

  const removeFromTeam = () => {
    let personId = team.map(person => person.id)
   
    console.log('the team', team)
  }

  return (
    <div className="App">
      <TeamForm addNewTeamMember={addNewTeamMember} />
      <hr />
      <TeamMembers team={team} removeFromTeam={removeFromTeam} />
    </div>
  );
}

export default App;
