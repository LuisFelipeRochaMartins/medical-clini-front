import Button from "../Button"
import Input from "../Input"

function LoginForm() {
  return (  
    <div className="flex flex-col justify-center gap-2 mb-4">
      <p className="self-center text-black font-bold text-3xl">Login</p>
      <Input 
        label="Usuário"
      />
      <Input 
        label="Senha"
        type="password"
      />
      <Button 
        label="Enviar"
      />
    </div> 
  )
}

export default LoginForm