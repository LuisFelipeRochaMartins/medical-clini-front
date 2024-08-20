import { ComponentProps } from "react"

interface InputProps extends ComponentProps<'input'> {
  label?: string
}

function Input({label, ...props} : InputProps) {
  return (
    <div className="flex flex-col justify-center gap-1">
      <label className="text-black font-medium text-lg">{label}</label>
      <input 
        {...props} 
        className="h-8 p-2 border-solid border-2 border-black rounded-md text-black focus:outline-none"
      />
    </div>
  )
}
export default Input