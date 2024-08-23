import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends ComponentProps<'input'> {
  label: string
}

function Input({label, className, ...props} : InputProps) {
  return (
    <div className="flex flex-col justify-center gap-1">
      <label className="text-black font-medium text-lg">{label}</label>
      <input 
        {...props} 
        className={twMerge('w-full h-9 p-2 text-lg border-solid border-2 border-black rounded-md text-black focus:outline-none disabled:bg-zinc-400', className)}
      />
    </div>
  )
}
export default Input