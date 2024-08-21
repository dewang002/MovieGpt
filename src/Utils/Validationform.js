import React from 'react'

function Validationform(email,password) {

  const validEmail =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email) //this either give true or flase
  const validPassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  if(validEmail===false)return "Enter valid Email"
  if(validPassword===false)return "Use special key/capital word in your password"
}

export default Validationform
