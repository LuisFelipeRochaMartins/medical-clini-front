'use server'

import Card from "@/components/Card"
import CardDialog from "@/components/Card/CardDialog";
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
      <main className="m-4">
        <section className="grid grid-cols-5 grid-rows-2 gap-4 justify-center items-center">
          {consultas.map((consulta: Consulta)=> <CardDialog key={consulta.id} {...consulta}/>)}
        </section>
      </main>
    </>
  )
}

export default Dashboard