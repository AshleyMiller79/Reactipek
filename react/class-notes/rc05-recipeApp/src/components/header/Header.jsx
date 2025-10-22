import React, { useContext } from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader } from './HeaderStyles'
import { RecipeContextt } from '../../context/RecipeProvider'

const Header = () => {

const {setQuery,getData}=useContext(RecipeContextt)

const handleSubmit=(e)=>{

e.preventDefault()

// database den verileri çek ama sen değil context
  getData()
}

  return (
    <HeaderContainer>

<MainHeader>FOOD APP</MainHeader>

<FormContainer onSubmit={handleSubmit}>
<FoodInput 
onChange={(e)=>setQuery(e.target.value)}
type="text" placeholder='search'/>

<Button type="submit"> SEARCH</Button>


</FormContainer>


    </HeaderContainer>
  )
}

export default Header