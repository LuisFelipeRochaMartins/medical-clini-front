import { ChangeEvent, ComponentProps } from "react"

interface InputProps extends ComponentProps<'input'> {
  label?: string
  valueChange: (valor : string) => void
  value: string
}

function Input({label, value, valueChange, ...props} : InputProps) {

  function change(e: ChangeEvent<HTMLInputElement>) {
    valueChange(e.target.value)
  }
  
  return (
    <div className="flex flex-col justify-center gap-1">
      <label className="text-black font-medium text-lg">{label}</label>
      <input 
        {...props} 
        value={value}
        className="h-8 p-2 border-solid border-2 border-black rounded-md text-black focus:outline-none"
        onChange={ change }
      />
    </div>
  )
}
export default Input