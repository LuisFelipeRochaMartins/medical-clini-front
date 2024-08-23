export async function getEntityById(session: string, entity: string, id: number) {
  const response = await fetch(`http://localhost:8080/${entity}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session}`
    }
  })
  return await response.json()
}

export async function getAllEntities(session: string, entity: string) {
  const response = await fetch(`http://localhost:8080/${entity}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session}`
    },
  })
  const data = await response.json()
  return data?.content
}

export async function createEntity(session: string, entity: string, form: FormData) {
  const medico = getEntityFromFormData(form)
  const response = await fetch(`http://localhost:8080/${entity}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session}`
    },
    body: JSON.stringify(medico)
  }) 
  return await response.json()
}

export async function updateEntity(session: String, entity: string, form: FormData) {
  const medico = getEntityFromFormData(form)
  const response = await fetch(`http://localhost:8080/${entity}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session}`
    },
    body: JSON.stringify(medico)
  })

  return await response.json()
}

export async function deleteEntity(session: string, entity: string, id: number) {
  const response = await fetch(`http://localhost:8080/${entity}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session}`
    }
  })
}

function getEntityFromFormData(form: FormData) {
  return {
    nome: form.get("nome"),
    email: form.get("email"),
    telefone: form.get("telefone"),
    crm: form.get("crm"),
    especialidade: form.get("especialidade"),
    endereco: getEnderecoFromFormData(form)
  }
}

function getEnderecoFromFormData(form: FormData) {
  return {
    logradouro: form.get("logradouro"),
    bairro: form.get("bairro"),
    cep: form.get("cep"),
    uf: form.get("uf"),
    complemento: form.get("complemento"),
    numero: form.get("numero"),
  }
}
