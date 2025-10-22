import React, { useContext } from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'

import mealFoto from "../../assets/meal.svg"
import { RecipeContextt } from '../../context/RecipeProvider'
import { useNavigate } from 'react-router-dom'




const Login = () => {

const{username,setUsername,password,setPassword}=useContext(RecipeContextt)

const navigate=useNavigate()


const handleSubmit=(e)=>{
e.preventDefault()

localStorage.setItem("kullaniciAdi",username)
localStorage.setItem("şifre",password)

// home sayfasına git

navigate("/home")

}


  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealFoto} />
        <Header>{"<Clarusway/>"} recipe </Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            required
          />
          <StyledInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login