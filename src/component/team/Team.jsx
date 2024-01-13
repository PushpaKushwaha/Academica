import React from 'react'
import Back from '../common/back/Back'
import TeamCard from './TeamCard'
import AWrapper from '../about/AWrapper'


function Team() {
  return (
    <>
     <Back title='Team'/>
     <section>
     <TeamCard/>
     </section>
     <AWrapper/>
     
    </>
  )
}

export default Team
