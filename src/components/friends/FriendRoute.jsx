import React from 'react'
import Nav from '../Navigation/nav'
import Friends from './Friends'
import Footer from '../footer/Footer'
import { useParams } from 'react-router-dom'

const FriendRoute = () => {
  const { username } = useParams()

  return (
    <div>
        <Nav username={username}/>
        <Friends username={username}/>
        <Footer username={username}/>
    </div>
  )
}

export default FriendRoute