import React, { useEffect } from 'react'
import NavBar from '../NavBar';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const selector = useSelector(state => state)
  const nav = useNavigate()
  useEffect(()=>{
    if(!selector.user)  nav('/')
  })
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default Dashboard