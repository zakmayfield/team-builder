const team = [
  {
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
    name: 'Dana Scully',
    badgeNumber: 'JTT 0331613',
    roles: [
            'FBI special agent', 
            'Assigned Agent on the X-Files', 
            'Medical doctor',
            'Forensic Science Instructor'
          ]
  }
]

export default team;

//Call this to render these details

{/* {team.map((item) => {
        console.log(item.roles)
        return (
          <div>
            <h2>{item.name}</h2>
            <h4>Badge number: {item.badgeNumber}</h4>
            {item.roles.map(item => {
              return (
                <div>
                  <ul>
                    <li>{item}</li>
                  </ul>
                </div>
              )
            })}
          </div>
        )
      })} */}