import React from 'react';

const TeamMembers = (props) => {
  return (
    <div>
      {props.team.map(item => (
        <div key={item.id} className="card">
          <h2>{item.name}</h2>
          <p><strong>Badge Number</strong>: {item.badgeNumber}</p>
          <div onClick={props.removeFromTeam} className="deleteButton">Delete</div>
        </div>
      ))}
    </div>
  )
}

export default TeamMembers;