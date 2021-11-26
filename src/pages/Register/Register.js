import './Register.css';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      nickname: nickname,
      password: password,
      passwordConfirmation: passwordConfirmation
    }

    axios.post('user/register', user)
    .then(response => console.log(response))
  }

  return(
    <div className='register'>
      <div className='register-container'>
        <h2>Criar uma conta na Steam</h2>

        <form className='register-form' onSubmit={handleSubmit}>
          <label>Nome</label>
          <input type='text' required onChange={event => setName(event.target.value)}/>

          <label>Nickname</label>
          <input type='text' required onChange={event => setNickname(event.target.value)}/>

          <label>Endereço de e-mail</label>
          <input type='email' required onChange={event => setEmail(event.target.value)}/>

          <label>Senha</label>
          <input type='password' required onChange={event => setPassword(event.target.value)}/>

          <label>Confirmar senha</label>
          <input type='password' required onChange={event => setPasswordConfirmation(event.target.value)}/>

          <div className='terms'>
            <input type='checkbox' placeholder='wedewdwed' required />
            <label>Eu concordo com os termos do <a href='https://store.steampowered.com/eula/203160_eula?eulaLang=brazilian'>Acordo de usuário da conta Steam</a> e confirmo que li a <a href='https://store.steampowered.com/privacy_agreement/'>Política de privacidade da Steam</a>.</label>
          </div>
          
          <div className='register-btn'>
            <input type='submit' value='Continuar' />
          </div>
        </form>
      </div>
    </div>
  )
}