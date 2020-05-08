import React, {useContext} from 'react'
import Useritems from './Useritems'
import {Spinner} from '../Layout/Spinner.js'
import PropTypes from 'prop-types'
import GithubContext from '../../Context/github/githubContext'




const Users=()=> {
  
    const githubContext= useContext(GithubContext);
    const {loading, users} =githubContext;

    if(loading){

return <Spinner/>

    }else{
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <Useritems key={user.id} user={user} />
                ))}
            </div>
        )
   
    }

   
    
        
      
   
    
    
    

}


const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}

export default Users
