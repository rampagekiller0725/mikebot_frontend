import React from 'react'
import Nav from '../Navigation/nav'
import Footer from '../footer/Footer'
import Mine from './Mine'
import { useParams } from 'react-router-dom'

const MineRoute = () => {
    const { username } = useParams()

    return (
        <div className='flex flex-col bg-black'>
            <Nav username={username}/>
            <Mine username={username}/>
            <Footer username={username}/>
        </div>
    )
}

export default MineRoute