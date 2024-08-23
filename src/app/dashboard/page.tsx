'use server'

import Card from "@/components/Card";
import GenericDialog from "@/components/Dialog";
import Input from "@/components/Input";
import { Consulta } from "@/shared/models";
import { getAllEntities } from "@/utils/entities"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function Dashboard() {
  const session = cookies().get('session')?.value
  if (!session) {
    redirect("/")
  }
  const consultas = await getAllEntities(session, "consultas")
  return (
    <>
      <main className="bg-zinc-500 m-4">
        <section className="grid grid-cols-5 grid-rows-2 gap-4 justify-center items-center">
          {consultas.map((consulta: Consulta) => 
            <GenericDialog 
            key={consulta.id}
            trigger={<Card {...consulta} />}
            content={
                <>
                  <div className="flex flex-row gap-7">
                    <Input
                      label="Nome"
                      value={consulta.paciente.nome}
                      disabled
                    />
                    <Input
                      label="Telefone"
                      value={consulta.paciente.telefone}
                      disabled
                    />
                  </div>
                <div className="flex flex-col gap-2 flex-1">
                <Input 
                    label="Email"
                    value={consulta.paciente.email}
                    disabled
                  />
                </div>
              </>
            }
            />)}
        </section>
      </main>
    </>
  )
}

export default Dashboard