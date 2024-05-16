import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Cards'
import Others from './Others'
import Nav from '../Navigation/nav'
import AOS from 'aos'
import "aos/dist/aos.css";
import Footer from '../footer/Footer'
import { initialUserState, request } from '../../utils/request'

const Cards = () => {
  const { username } = useParams()

  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      duration: 700,
    });
    request('http://localhost:4000/findUser', 'POST', {name: username}).then((res) => {
        setUser(res.data.user);
    });
  }, [])
  
  useEffect(() => {
    if (user === null) return;
    request('http://localhost:4000/updateUser', 'POST', {user: user});
}, [user]);

  return (
    <div className=''>
      <Nav username={username}/>
      <Card username={username} user={user} setUser={setUser}/>
      <Others username={username} user={user} setUser={setUser}/>
      <Footer username={username}/>
    </div>

  )
}

export default Cards