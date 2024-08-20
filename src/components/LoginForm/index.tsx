import { FormEvent, useState } from "react"
import Button from "../Button"
import Input from "../Input"

function LoginForm() {
  const [usuario, setUsuario] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  function validateLogin(usuario: string, senha: string) {
    fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({usuario, senha})
    })
    .then(response => {
      if (!response.ok) {
        return 
      }
      return response.json()
    })
    .then(data => {
      return data.token
    })
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    validateLogin(usuario, senha)
  }

  return (  
    <form 
      className="flex flex-col justify-center gap-2 mb-4" 
      onSubmit={submit}>

      <p className="self-center text-black font-bold text-3xl">Login</p>
      <Input 
        valueChange={value => setUsuario(value)}
        value={usuario}
        label="Usuário"
      />
      <Input 
        value={senha}
        valueChange={value => setSenha(value)}
        label="Senha"
        type="password"
      />
      <Button 
        
        label="Enviar"
      />
    </form> 
  )
}

export default LoginForm