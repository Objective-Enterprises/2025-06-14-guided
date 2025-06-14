import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  function handleUsernameChange (event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }
  function handlePasswordChange (event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }
  function handleSubmit (event: FormEvent) {
    event.preventDefault()
    const correctUsername = username === 'admin'
    const correctPassword = password === 'foodie123'
    const correctLogin = correctUsername && correctPassword
    if (correctLogin) {
      localStorage.setItem('fake-jwt-token', 'dummy')
      router.push('/menu')
    }
  }
  return (
    <div className='container'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <input value={username} onChange={handleUsernameChange} />
        <input value={password} onChange={handlePasswordChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}