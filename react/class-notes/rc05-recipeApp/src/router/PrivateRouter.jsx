import React, { useContext } from 'react'
import { RecipeContextt } from '../context/RecipeProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

const{username,password}=useContext(RecipeContextt)

  return username==="ipek" && password==="1234"? <Outlet/> :<Navigate to="/"/>
    
  
}

export default PrivateRouter