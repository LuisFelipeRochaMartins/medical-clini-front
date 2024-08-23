import { Consulta } from "@/shared/models"
import { getDayMonthAndHours } from "@/utils/date"
import { BriefcaseMedical } from "lucide-react"

function Card({medico, paciente, data}: Consulta) {
  const date = new Date(data)
  const formattedDate = getDayMonthAndHours(date)
  return (
    <>
      <div className="ring-1 ring-white rounded-lg px-3 py-2">
        <header className="flex flex-row flex-wrap gap-2 mb-2">
          <BriefcaseMedical />
          <h3>{paciente.nome}</h3>  
          <h3 className="ml-auto">{medico.especialidade}</h3>
        </header>
        <h3>{formattedDate}</h3>
      </div>
    </>
  )
}

export default Card