"use client";

import { FormEvent } from "react";
import Button from "../Button";
import Input from "../Input";
import { login } from "@/auth";

async function validateLogin(formData: FormData): Promise<string | undefined> {
  try {
    const user = { usuario: formData.get("usuario"), senha: formData.get("senha") }
    const response = await fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Login failed!')
    }

    const data = await response.json()
    return data?.token
  } catch (error) {
      throw error;
  }
}

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = new FormData(e.currentTarget)
  const token = await validateLogin(form)

  if (token) {
    await login(token)
  }
}

function LoginForm() {
  return (
    <form 
      className="flex flex-col justify-center gap-2" 
      onSubmit={handleSubmit} 
    >
      <p className="self-center text-black font-bold text-3xl">Login</p>
      <Input 
        label="Usuário"
        name="usuario"
        required
      />
      <Input 
        label="Senha"
        type="password"
        name="senha"
        required
      />
      <Button 
        label="Enviar"
      />
    </form>
  )
}

export default LoginForm;
