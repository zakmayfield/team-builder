import React, { useState } from 'react';

const TeamForm = (props) => {

  // console.log('these are our props on team form', props)

  const [teamMember, setTeamMember] = useState({
    name: '',
    badgeNumber: ''
  })

  const handleChanges = e => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name)
    console.log(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeamMember(teamMember);
  }

  return (
    <div>
      <h2>Team Builder</h2>

      <form onSubmit={submitForm} >
        <label>
          First and Last Name:
          <input 
            type='text'
            name="name"
            placeholder="John Marston"
            onChange={handleChanges} 
          />
        </label>

        <label>
          Badge Number:
          <input 
            type='text'
            name="badgeNumber"
            placeholder="ABCD 123456"
            onChange={handleChanges} 
          />
        </label>

        <button type='submit'>Add to team</button>
      </form>
    </div>
  )
}

export default TeamForm;