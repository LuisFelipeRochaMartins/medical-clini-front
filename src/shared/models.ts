export interface Medico {
  id: number
  nome: string
  email: string
  crm: string
  telefone: string
  endereco: Endereco
  especialidade: string
}

export interface Paciente {
  id: number
  nome: string
  email: string
  telefone: string
  endereco: Endereco
}

export interface Consulta {
  id: number
  medico: Medico
  paciente: Paciente
  data: Date
}

interface Endereco {
  logradouro: string
  bairro: string
  cep: string
  numero: string
  complemento: string
  cidade: string
  uf: string
}