import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {
  label?: string
}

function Button({label, ...props}: ButtonProps) {
  return (
    <>
      <button 
        {...props}
        className="h-9 bg-black text-white text-center font-bold text-xl rounded-md"
      >
        {label}
      </button>
    </>
  )
}

export default Button