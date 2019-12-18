import React from 'react';

const TeamMembers = (props) => {
  return (
    <div>
      {props.team.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p><strong>Badge Number</strong>: {item.badgeNumber}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamMembers;