import * as Dialog from "@radix-ui/react-dialog"
import './styles.css'
import { X } from "lucide-react"

function GenericDialog({trigger, content}: any) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className="DialogTrigger">
          {trigger}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay">
            <Dialog.Content className="DialogContent">
              <Dialog.Title className="DialogTitle">
                Visualizar Dados da Consulta
              </Dialog.Title> 
              <Dialog.Description className="DialogDescription">
                Verifique se as informações estão corretas
              </Dialog.Description> 
                {content}
              <Dialog.Close asChild>
                <button className="IconButton">
                  <X color="black"/>
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default GenericDialog