import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='flex justify-center'>please login</div>

    return <div className='flex justify-center'>Welcome {user.username}</div>
}

export default Profile