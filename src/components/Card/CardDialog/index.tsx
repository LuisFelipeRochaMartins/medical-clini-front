import * as Dialog from "@radix-ui/react-dialog"
import Card from ".."
import { Consulta } from "@/shared/models"
import Input from "@/components/Input"

function CardDialog(consulta: Consulta) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Card {...consulta}/>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content>
            <Dialog.Title>
              Visualizar Dados da Consulta
            </Dialog.Title> 
            <Dialog.Description>
              Verifique se as informações estão corretas
            </Dialog.Description> 
            <fieldset>
              <legend>Medico</legend>
              <Input 
                label="nome"
                value={consulta.medico.nome}
                disabled
              />
              <legend>Paciente</legend>
              <Input 
                label="Nome Paciente"
                value={consulta.paciente.nome}
                disabled
              />
            </fieldset>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default CardDialog