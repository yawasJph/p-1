import './style.css'
import { auth } from './auth'

const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', (e)=> {
  e.preventDefault()
  
  const inputs = document.querySelectorAll('input[name]');

  const user = inputs[0].value
  const password = inputs[1].value 
  
  auth(user,password)
}) 
